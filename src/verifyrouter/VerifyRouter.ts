import { Response, NextFunction, RequestHandler } from 'express';
import { IRequest, CurrentUser } from '../base';
import jwt from 'jsonwebtoken';

export default function (cert: Buffer): RequestHandler {
    return function (req: IRequest, res: Response, next: NextFunction): void {
        const authorization: string = req.headers["authorization"];

        const token = authorization.replace(/^Bearer\s+/, "");

        jwt.verify(token, cert, function (err, decoded) {
            if (err == null) {
                req.currentUser = decoded as CurrentUser;
                next();
            } else {
                res.status(401).send({ "message": "Unauthorized" }).end();
                return;
            }
        });
    }
}