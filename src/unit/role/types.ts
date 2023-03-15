import {IBaseResponse, IBaseRequest, IBaseService} from '../../base'
const path = "/client";



export interface IPermission<T>  extends  IBaseResponse<T>{
  code:string,
  lvl:number,
}
export interface IRoleResponse<T=number> extends  IBaseResponse<T>{
  permission:Array<IPermission<T>>
}

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