export interface IColumn {
    type:string,
    select?: boolean,
    update?: boolean,
}

export interface IColumnDictionary extends IColumn
{
    table?:string,
    display?:string
}
export interface IColumnBase extends IColumn
{
    alias?:string,
    primaryKey?:boolean,
    size?:number,
    notNull?:boolean
}

export enum Comparison {
    EQUALS =  <any>"=",
    LESS =  <any>"<",
    MORE =  <any>">",
    IN = <any>"IN",
    NOT_IN =  <any>"NOT IN",
    IS_NULL = <any>"IS NULL",
    NOT_NULL = <any>"NOT NULL",
    EXISTS =  <any>"EXISTS",
    LIKE = <any>"LIKE",
}

export enum Operator {
    AND = <any>"AND",
    OR= <any>"OR",
    NOT_EQUALS= <any>"<>",
}
export interface Filter
{
    
}
export interface IWhereCondition
{
    enabled?:boolean,
    column:string,
    comparison:Comparison,
    operator?:Operator,
    visible?:boolean
}
export interface IWheres 
{
    [key:string]:IWhereCondition
}
export interface IColumns 
{
    [key:string]:IColumn | string
}
export interface IShema 
{
    name:string,
    alias?:string,
    columns:IColumns,
    where?:IWheres
}