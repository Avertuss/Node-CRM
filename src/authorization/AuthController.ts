import express, { Request, Response } from 'express';
import {IAuthService} from './AuthService';
var router = express.Router(); 

export  function AuthController(service :IAuthService )
{
    return router.post('/login',function(req : Request,res : Response)
    {
        console.log( req.body);
        const token = service.login(req.body.username, "");
        
        res.json({idToken:token})
    });
} 