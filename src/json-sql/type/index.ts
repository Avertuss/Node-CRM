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
export interface IColumnJoin extends IColumn
{
    table: string
}
export interface IColumnBase extends IColumn
{
    alias?:string,
    primaryKey?:boolean,
    size?:number,
    notNull?:boolean
}
export enum JOIN {
    LEFT = <any>"LEFT JOIN"
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
export interface SQLColumn {
    table: string,
    name: string,
    alias: string,
}
export interface SQLWhere {
    column: SQLColumn,
    comparison: Comparison,
}
export enum Operator {
    AND = <any>"AND",
    OR = <any>"OR",
    NOT_EQUALS= <any>"<>",
}

export interface IFilter {
    col:string | SQLColumn,
    comparison:Comparison,
    value?:any,
} 
export interface IFilterColumns {
    colA:string ,
    comparison:Comparison,
    colB:string,
} 
export type WhereChainType = Array<IFilter | IFilterColumns | Operator | WhereChainType> ;
export interface PageableByFilter extends Pageable
{
    filter:WhereChainType
}
export interface Pageable
{
    count?:Number
    start?:Number
    size?:Number 
}
export interface IColumns 
{
    [key:string]:IColumn | string
}
export interface IShema 
{
    name:string,
    primaryKey:string,
    alias?:string,
    columns:IColumns,
    where?:WhereChainType
}
export type SQLValues<T=any> = Array<T>;
export type SQLMeta =
{
    sql: string
    value?:SQLValues
}