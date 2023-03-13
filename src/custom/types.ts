import {IBaseService, IBaseRequest, IBaseResponse} from 'src/base';

export interface ICustomResponse extends IBaseResponse<any> {}

export interface ICustomRequest extends IBaseRequest {}
export interface ICustomService extends IBaseService<ICustomRequest,ICustomResponse>
{

}