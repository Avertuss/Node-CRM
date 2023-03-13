import express, { Request, Response } from 'express';
import {IAuthService, AuthResponse, AuthRequest } from './types';
import {IRequestTypeBody} from '../base';
var router = express.Router(); 

export  function AuthController(service :IAuthService )
{
    return router.post('/login',function(req : IRequestTypeBody<AuthRequest>,res : Response, next)
    {   
        const response : AuthResponse = service.login(req.body);
        res.json(response)
    });
} 