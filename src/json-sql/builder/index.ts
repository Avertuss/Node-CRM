import { IShema, IColumns, IColumn, IColumnDictionary, IColumnBase, IWhere, IWheres, Comparison, } from '../type';
interface Column {
    table: string,
    name: string,
    alias: string,
}
interface Where {
    column: Column,
    comparison: Comparison,
    operator: string,
    value?: any
}
const SHEMA_DEFAULT_NAME = "dbo"
class WhereBuilder {
    private wheres: IWheres;
    private SHEMA_WHERE: Array<Where>;
    constructor(wheres: IWheres) {
        this.wheres = wheres;
    }

}

class SelectBuilder {
    private shema: IShema
    private SELECT_SQL: string = "";
    private WHERE_SQL: string = "";
    private SHEMA_COLUMNS_SELECT = Array<Column>();
    private SHEMA_WHERE: Array<Where>;
    private TABLE_ALIAS: string;
    private SHEMA_JOIN = Array<any>();
    constructor(shema: IShema) {
        this.shema = shema;
        this.SHEMA_WHERE = new Array<Where>();
        this.TABLE_ALIAS = shema.alias ? shema.alias : shema.name;
        this.select(shema.columns);
    }
    public select(columns: IColumns): SelectBuilder {
        const columnsKeys = Object.keys(columns);
        columnsKeys.filter(key => typeof columns[key] === "string" || typeof columns[key] === "object" &&
            (typeof (columns[key] as IColumn)?.select === "undefined" || (columns[key] as IColumn)?.select == true)
        )
            .map(key => this.generateSelectSQLColumn(key, typeof columns[key] === "object" ? (columns[key] as IColumn) : null));

        return this;
    }

    public where(filterKey?: string, value?: any, enabled: boolean = true): SelectBuilder {
        if (filterKey != null && this.shema?.where?.[filterKey]) {
            console.log(filterKey);
            const where: IWhere = (this.shema.where[filterKey] as IWhere)
            where.enabled = enabled;
            let col: Column = this.SHEMA_COLUMNS_SELECT.find(col => col.name === where.column)
            this.SHEMA_WHERE.push(this.toWhere(where, col,value))
        }
        return this;
    }
    public build(): string {
        return this.SELECT_SQL = "SELECT " + this.SHEMA_COLUMNS_SELECT.map(this.concatColName).join(",") + " FROM "
            + this.concatTableName(this.shema.name, this.shema.alias)
            + (this.SHEMA_WHERE.length > 0 ? (" WHERE " + this.SHEMA_WHERE.join(" ")) : "");
    }
    private generateSelectSQLColumn(key: string, col: IColumn): void {
        this.SHEMA_COLUMNS_SELECT = Array<Column>();
        if (col && typeof col === "object") {
            if (typeof (col as IColumnDictionary)?.table === "string") {
                let colDictionary: IColumnDictionary = col as IColumnDictionary
                this.SHEMA_COLUMNS_SELECT.push({ table: this.TABLE_ALIAS, name: (key + "Id"), alias: (key + "Id") });
                this.SHEMA_COLUMNS_SELECT.push({ table: colDictionary.table, name: colDictionary.display, alias: (key + colDictionary.display) });
            } else {
                let colBase: IColumnBase = col as IColumnBase;
                this.SHEMA_COLUMNS_SELECT.push({ table: this.TABLE_ALIAS, name: key, alias: colBase?.alias ? colBase.alias : key });
            }
        }
        else {
            this.SHEMA_COLUMNS_SELECT.push({ table: this.TABLE_ALIAS, name: key, alias: key });
        }
    }
    private concatTableName(tableName: string, tableAlias: string, shema: string = SHEMA_DEFAULT_NAME) {
        return `[${shema}].[${tableName}] as [${tableAlias ? tableAlias : tableName}]`;
    }
    private concatColName(col: Column): string {
        return `[${col.table}].[${col.name}] ${col.alias ? `as [${col.alias}]` : ""}`;
    }
    private toWhere(where: IWhere, col: Column, value?: any): Where {
        return {
            column: col,
            comparison: where.comparison,
            operator: where.hasOwnProperty("operator") ? where.operator : "AND",
            value: value
        } as Where
    }

}

export class Bulder {
    private shema: IShema

    private selectlBuilder: SelectBuilder;

    constructor(shema: IShema) {
        this.shema = shema;

        this.selectlBuilder = new SelectBuilder(shema);
    }
    public select(columns?: IColumns): SelectBuilder {
        if (columns! = null) {
            return this.selectlBuilder.select(columns)
        }
        else {
            return this.selectlBuilder;
        }

    }
    public update(): string {
        return "";
    }
    public delete(): string {
        return "";
    }

    /*
    
    function toWhere(column: string,
        comparison: Comparison,
        operator: string,
        value?: any): Where {
        return {
            column,
            comparison,
            operator,
            value,
        }
    }



   
    let filterKey = Object.keys(shema.where);
    filterKey.filter(key => (shema.where[key] as IWhere).enabled)
        .map(key => {
            let where: IWhere = shema.where[key];
            let col = SHEMA_COLUMNS_SELECT.find(c => c.name === where.column);
            let stringComparison: Where = null;
            switch (where.comparison) {
                case Comparison.EQUALS:
                    stringComparison = toWhere( concatColName({ table: col.table, name: col.name }),Comparison.EQUALS, where.operator)
                    break;
                case Comparison.EXISTS:
                    stringComparison = toWhere( `( SELECT * FROM [${where.table}] AS [${where.table}]_ WHERE [${where.table}_].[id] = ${concatColName({ table: col.table, name: col.name })} )`,Comparison.EXISTS, where.operator)
                    break;
            }
            if (!!stringComparison)
                SHEMA_WHERE.push(stringComparison)
        })
    
    console.log(SELECT_COLUMNS);
    */
}