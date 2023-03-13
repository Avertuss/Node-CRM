import express, { Request, Response, Router, NextFunction, RequestHandler } from 'express';

import { Filter, IRequest, Permission, LVL } from 'src/base';
import {ICustomService} from './types';

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
export default function(roleServise: ICustomService) {

    router.get("/contact", isPemite(LVL.READ, 'role')
    , async function (req: IRequest, res: Response, next: NextFunction) {
        const data = await roleServise.getAll(req.query as Filter);
        res.send(data);
    });
    
}

