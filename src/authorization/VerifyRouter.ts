import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';


var router = express.Router(); 
var cert : Buffer = fs.readFileSync('C:\\Work\\core\\secret\\pub.pem');

export default function(req : Request,res :Response, next : Function)
{
    let token : string = req.headers["authorization"];

    token = token.replace(/^Bearer\s+/, "");

    jwt.verify(token, cert, function(err, decoded) {
        if(err==null)
        {
            console.log(decoded); // bar
            next();
        }    
      });
    next();
}
