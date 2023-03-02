import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export default function (cert : Buffer) :RequestHandler
{
    return function(req : Request,res :Response, next : NextFunction): void  
{
    const authorization : string = req.headers["authorization"];

    const token = authorization.replace(/^Bearer\s+/, "");

    jwt.verify(token, cert, function(err, decoded) {
        if(err==null)
        {
            console.log(decoded); // bar
            next();
        }    
      });
    next();
}
}