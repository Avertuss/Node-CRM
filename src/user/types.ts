import {IBaseResponse, IBaseRequest, IBaseService} from '../base'
const path = "/client";

export type PermissionRequest =
{
  code: string,
  lvl : number
}

export interface IRoleResponse extends  IBaseResponse<string>{}

export interface IRoleRequest extends IBaseRequest
{
  permission:Array<any>
}
export interface IRoleService extends IBaseService<IRoleRequest,IRoleResponse>
{
   
}

export interface IUserService
{
   
}

  
  
export interface IUserRepository
{
    findByLoginAndPassword(username : String ,password: String) ;
}