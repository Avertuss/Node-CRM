import express, { Request, Response } from 'express';
import {IAuthService, AuthResponse, AuthRequest } from './types';

interface TypeRequest<T> extends Request
{
    body:T
}

var router = express.Router(); 

export  function AuthController(service :IAuthService )
{
    return router.post('/login',function(req : TypeRequest<AuthRequest>,res : Response, next)
    {   
        console.log(req)
        const response : AuthResponse = service.login(req.body);
        res.json(response)
    });
} 