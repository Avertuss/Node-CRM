import express, { Request, Response, Router } from 'express';

const path : string = "/user"
const  router : Router = express.Router(); 
export default function()
{
    return router.post(path, function(){})
}