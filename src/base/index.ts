export interface IBaseResponse<T>
{
    id:T
    name:string
}
export interface Filter
{
    count:Number
    startIndex:Number
    size:Number 
}

export interface Page<E>
{
    data:Array<E>
}
export interface IBaseRequest
{
    name:string
}

export interface IBaseService<T, E>
{
    create(request:T):E
    update(id:string,request:T):E
    delete(id:string):E
    getById(id:string):E
    getAll(filter:Filter):Page<E>
}
export interface IRepository<T,E>
{
 
    create(entity:E):E
    update(entity:E):E
    delete(id:T):E
    getById(id:T):E
    getAll(filter:Filter):Page<E>
}