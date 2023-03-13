import { Request, Response } from 'express';

import * as core from 'express-serve-static-core';

export interface IRepository<T,E>{
    
}

export interface IBaseResponse<T>
{
    id:T
    name:string
}
export interface IBaseRequest
{
    name:string
}
export interface Filter
{
    count?:Number
    startIndex?:Number
    size?:Number 
}

export interface Page<E>
{
    data:Array<E>
    count: number
}


export interface IBaseEntity<T>
{
    id:T,
    createdOn: Date,
    createdBy:CurrentUser
    name:string
}
export interface IBaseService<T, E>
{
    create(request:T):Promise<E>
    update(id:string,request:T):Promise<E>
    delete(id:string):Promise<E>
    getById(id:string):Promise<E>
    getAll(filter:Filter):Promise<Page<E>>
}
export interface ICurdRepository<T,E>
{
 
    create(entity:E):Promise<E>
    update(entity:E):Promise<E>
    delete(id:T):Promise<E>
    getById(id:T):Promise<E>
    getAll(filter:Filter):Promise<Array<E>>
}
export enum LVL 
{
    READ = 1,
    UPDATE = 2,
    DELETE =3
}
export type Permission =
{
    id: number,
    code: string,
    name: string,
    lvl: LVL
}
export type CurrentUser ={
    sub: string,
    permission: Array<Permission>,
    roles:Array<any>
}
export interface IRequest<
P = core.ParamsDictionary,
ResBody = any,
ReqBody = any,
ReqQuery = core.Query,
Locals extends Record<string, any> = Record<string, any>
> extends Request<P, ResBody ,ReqBody , ReqQuery,Locals>
{
    currentUser: CurrentUser
}
export interface IRequestTypeBody<T> extends IRequest
{
    body:T
}


export function toPage<E>(array:Array<E>):Page<E>
{
  return { data:array, count: array.length };
}