import { IShema, IColumns, IColumn, IColumnDictionary, IColumnBase, IFilter, WhereChainType, Comparison, Operator, SQLColumn, SQLWhere } from '../type';

const SHEMA_DEFAULT_NAME = "dbo"


function whereToSQL(where: IFilter, index?: number) {
    return `[${( where.column as SQLColumn).table}].[${( where.column as SQLColumn).name}] ${where.comparison} $${index}`;
}
function concatTableName(tableName: string, tableAlias: string, shema: string = SHEMA_DEFAULT_NAME) {
    return `[${shema}].[${tableName}] as [${tableAlias ? tableAlias : tableName}]`;
}
function concatColName(col: SQLColumn): string {
    return `[${col.table}].[${col.name}] ${col.alias ? `as [${col.alias}]` : ""}`;
}
function toWhere(comparison: Comparison, col: SQLColumn): SQLWhere {
    return {
        column: col,
        comparison: comparison,
    } as SQLWhere
}
function  generateSelectSQLColumn(key: string, col: IColumn, tableAlias: string): Array<SQLColumn> {

    let sqlColumn = Array<SQLColumn>();
    if (col && typeof col === "object") {
        if (typeof (col as IColumnDictionary)?.table === "string") {
            let colDictionary: IColumnDictionary = col as IColumnDictionary
            sqlColumn.push({ table: tableAlias, name: (key + "Id"), alias: (key + "Id") });
            sqlColumn.push({ table: colDictionary.table, name: colDictionary.display, alias: (key + colDictionary.display) });
        } else {

            let colBase: IColumnBase = col as IColumnBase;
            let sqlCol: SQLColumn = { table:tableAlias, name: key, alias: colBase?.alias ? colBase.alias : key };
            sqlColumn.push(sqlCol);
        }
    }
    else {
        sqlColumn.push({ table: tableAlias, name: key, alias: key });
    }
    return sqlColumn;
}
function generateSQLWhere(whereChain: WhereChainType,indexSequens: number= 1): string {
    let WHERE_SQL = ""
        whereChain.forEach(e => {
            if ((e as IFilter).column) {
                let fil: IFilter = e  as IFilter;
                WHERE_SQL+=" "+whereToSQL(fil,indexSequens++);
            } else if (Array.isArray(e)) {
                WHERE_SQL+=" ( "+generateSQLWhere(e as WhereChainType, indexSequens)+" ) ";
            } else if (Object.values(Operator).includes(e as Operator)) {
                WHERE_SQL+=" "+(e as Operator);
            }
        })
    return WHERE_SQL;
}
class WhereBuilder {
    private whereChain: WhereChainType;
    private SHEMA_WHERE: Array<SQLWhere>;
    constructor(whereChain: WhereChainType) {
        this.whereChain = whereChain;
    }

}

class SelectBuilder {
    private shema: IShema
    private SELECT_SQL: string = "";
    private WHERE_SQL: string = "";
    private SHEMA_COLUMNS_SELECT = Array<SQLColumn>();
    private SHEMA_WHERE: WhereChainType = [];
    private TABLE_ALIAS: string;
    private SHEMA_JOIN = Array<any>();
    private whereBuilder: WhereBuilder;
    private id: SQLColumn;
    private indexValue:number = 1;
    constructor(shema: IShema) {
        this.shema = shema;
        this.TABLE_ALIAS = shema.alias ? shema.alias : shema.name;
        this.select(shema.columns);
        this.whereBuilder = new WhereBuilder(shema.where);

    }
    public select(columns: IColumns): SelectBuilder {
        const columnsKeys = Object.keys(columns);
        this.SHEMA_COLUMNS_SELECT = Array<SQLColumn>();
        columnsKeys.filter(key => typeof columns[key] === "string" || typeof columns[key] === "object" &&
            (typeof (columns[key] as IColumn)?.select === "undefined" || (columns[key] as IColumn)?.select == true)
        )
            .forEach((key) => this.SHEMA_COLUMNS_SELECT.push(...generateSelectSQLColumn(key, typeof columns[key] === "object" ? (columns[key] as IColumn) : null, this.TABLE_ALIAS)));

        this.SHEMA_WHERE.length > 0 ? (this.SHEMA_WHERE = []) : null;
        return this;
    }
    public byId(): SelectBuilder {
        if (this.SHEMA_WHERE.length > 0) {
            this.SHEMA_WHERE = [[{ column: this.id, comparison: Comparison.EQUALS }], Operator.AND, [...this.SHEMA_WHERE]]
        } else {
            this.SHEMA_WHERE = [{ column: this.id, comparison: Comparison.EQUALS }]
        }
     
        return this;
    }
    public where(filter?: WhereChainType): SelectBuilder {
        if(filter !=null ){ 
            if (this.SHEMA_WHERE.length > 0) {
                this.SHEMA_WHERE = [[...this.SHEMA_WHERE], Operator.AND, [...filter] ]
            }else {
                this.SHEMA_WHERE = filter
            }
        }
        return this;
    }

    public build(): string {
        this.indexValue = 1;
        console.log(this.SHEMA_WHERE);
        return this.buildSelect() + ( this.SHEMA_WHERE.length > 0 ? " WHERE "+generateSQLWhere(this.SHEMA_WHERE) : "" ) 
    }
    private buildSelect(): string {
        this.SELECT_SQL = "SELECT " + this.SHEMA_COLUMNS_SELECT.map(concatColName).join(",") + " FROM "
            + concatTableName(this.shema.name, this.shema.alias);
        return this.SELECT_SQL;
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

}