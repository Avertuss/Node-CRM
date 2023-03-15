import express, { Request, Response, Router, NextFunction, RequestHandler } from 'express';

import { Filter, IRequest, Permission, LVL } from '../base';
import {IDictionaryService} from './types';

const router: Router = express.Router();

const isPemite = function (lvl: number): RequestHandler {
    return function (req: IRequest, res: Response, next: NextFunction) {

        const code = req.params.folder;
        let permission: Permission = req.currentUser.permission.find(per => per.code === code)
        if (permission.lvl >= lvl) {
            next();      
        }
        else {
            res.status(403).send({ "message": "ACCESS_DENIED" })
        }
        return;
    }
}
export default function(roleServise: IDictionaryService) {

    router.get("/dictionary/:folder/:dictionary", isPemite(LVL.READ)
    , async function (req: IRequest, res: Response, next: NextFunction) {
        const data = await roleServise.getAll(req.query as Filter);
        res.send(data);
    });
    
    return router;
}

