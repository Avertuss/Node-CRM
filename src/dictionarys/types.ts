import {IBaseService, IBaseRequest, IBaseResponse, IBaseEntity} from '../base';

export interface IDictionaryResponse extends IBaseResponse<any> {}
export interface IDictionaryEntity extends IBaseEntity<any> {
    [key:string]: any
}
export interface IDictionaryRequest extends IBaseRequest {}
export interface IDictionaryService extends IBaseService<IDictionaryRequest,IDictionaryResponse>
{

}