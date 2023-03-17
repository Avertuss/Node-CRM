import express, {  Response, Router, NextFunction } from 'express';
import { IRoleRequest, IRoleService } from './types';
import {  IRequest, IRequestTypeBody,  LVL } from '../../base';
import { isPemite } from '../../base/permisson-util';
import {PageableByFilter, Pageable} from '../../json-sql';
const router: Router = express.Router();

export default function (roleServise: IRoleService, path: string) {

    router.get("/role", isPemite(LVL.READ, 'role'), async function (req: IRequest, res: Response, next: NextFunction) {
        const data = await roleServise.getAll(req.query as Pageable);
        res.send(data);
    });
    router.get("/role/:id", isPemite(LVL.READ, 'role'), async function (req: IRequest, res: Response, next: NextFunction) {
        const data = await roleServise.getById(req.params.id);
        res.send(data);
    });
    router.post("/role", isPemite(LVL.UPDATE, 'role'), async function (req: IRequestTypeBody<IRoleRequest>, res: Response, next: NextFunction) {
        const data = roleServise.create(req.body);
        res.send(data);
    });
    router.post("/role/filter", isPemite(LVL.UPDATE, 'role'), async function (req: IRequestTypeBody<PageableByFilter>, res: Response, next: NextFunction) {
        const data = await roleServise.getPageableByFilter(req.body as PageableByFilter);
        res.send(data);
    });
    router.patch("/role/:id", isPemite(LVL.UPDATE, 'role'), async function (req: IRequestTypeBody<IRoleRequest>, res: Response, next: NextFunction) {
        const data = roleServise.update(req.params.id, req.body);
        res.send(data);
    });
    return router.delete("/role/:id", isPemite(LVL.DELETE, 'role'), async function (req: IRequest, res: Response, next: NextFunction) {
        const data = roleServise.delete(req.params.id)
        res.send(data);
    });
}