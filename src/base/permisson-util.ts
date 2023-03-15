import { Response, NextFunction, RequestHandler } from 'express';
import {  IRequest, Permission, LVL } from '../base';

export const isPemite = function (lvl: number, code: string): RequestHandler {
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