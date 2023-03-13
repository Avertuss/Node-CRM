import express, { Request, Response, Router, NextFunction, RequestHandler } from 'express';
import { IRoleRequest, IRoleService } from './types';
import { Filter, IRequest, IRequestTypeBody, Permission, LVL } from '../base';

const router: Router = express.Router();

const isPemite = function (lvl: number, code: string): RequestHandler {
    return function (req: IRequest, res: Response, next: NextFunction) {

        let permission: Permission = req.currentUser.permission.find(per => per.code === code)
        if (permission.lvl >= lvl) {
            next();
        }
        else {
            res.status(403).send({ "message": "ACCESS_DENIED" })
        }
    }
}

export default function (roleServise: IRoleService, path: string) {

    router.get("/role", isPemite(LVL.READ, 'role'), async function (req: IRequest, res: Response, next: NextFunction) {
        const data = await roleServise.getAll(req.query as Filter);

        res.send(data);
    });
    router.get("/role/:id", isPemite(LVL.READ, 'role'), async function (req: IRequest, res: Response, next: NextFunction) {
        const data = await roleServise.getById(req.params.id);
        console.log(data);
        res.send(data);
    });
    router.post("/role", isPemite(LVL.UPDATE, 'role'), async function (req: IRequestTypeBody<IRoleRequest>, res: Response, next: NextFunction) {
        const data = roleServise.create(req.body);
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