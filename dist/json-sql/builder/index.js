"use strict";
exports.__esModule = true;
exports.Bulder = void 0;
var SHEMA_DEFAULT_NAME = "dbo";
var SelectBuilder = (function () {
    function SelectBuilder(shema) {
        this.SELECT_SQL = "";
        this.WHERE_SQL = "";
        this.SHEMA_COLUMNS_SELECT = Array();
        this.SHEMA_JOIN = Array();
        this.shema = shema;
        this.SHEMA_WHERE = new Array();
        this.TABLE_ALIAS = shema.alias ? shema.alias : shema.name;
        this.select(shema.columns);
    }
    SelectBuilder.prototype.select = function (columns) {
        var _this = this;
        var columnsKeys = Object.keys(columns);
        columnsKeys.filter(function (key) {
            var _a, _b;
            return typeof columns[key] === "string" || typeof columns[key] === "object" &&
                (typeof ((_a = columns[key]) === null || _a === void 0 ? void 0 : _a.select) === "undefined" || ((_b = columns[key]) === null || _b === void 0 ? void 0 : _b.select) == true);
        })
            .map(function (key) { return _this.generateSelectSQLColumn(key, typeof columns[key] === "object" ? columns[key] : null); });
        return this;
    };
    SelectBuilder.prototype.where = function (filters) {
        return this;
    };
    SelectBuilder.prototype.build = function () {
        return this.SELECT_SQL = "SELECT " + this.SHEMA_COLUMNS_SELECT.map(this.concatColName).join(",") + " FROM "
            + this.concatTableName(this.shema.name, this.shema.alias)
            + (this.SHEMA_WHERE.length > 0 ? (" WHERE " + this.SHEMA_WHERE.join(" ")) : "");
    };
    SelectBuilder.prototype.generateSelectSQLColumn = function (key, col) {
        this.SHEMA_COLUMNS_SELECT = Array();
        if (col && typeof col === "object") {
            if (typeof (col === null || col === void 0 ? void 0 : col.table) === "string") {
                var colDictionary = col;
                this.SHEMA_COLUMNS_SELECT.push({ table: this.TABLE_ALIAS, name: (key + "Id"), alias: (key + "Id") });
                this.SHEMA_COLUMNS_SELECT.push({ table: colDictionary.table, name: colDictionary.display, alias: (key + colDictionary.display) });
            }
            else {
                var colBase = col;
                this.SHEMA_COLUMNS_SELECT.push({ table: this.TABLE_ALIAS, name: key, alias: (colBase === null || colBase === void 0 ? void 0 : colBase.alias) ? colBase.alias : key });
            }
        }
        else {
            this.SHEMA_COLUMNS_SELECT.push({ table: this.TABLE_ALIAS, name: key, alias: key });
        }
    };
    SelectBuilder.prototype.concatTableName = function (tableName, tableAlias, shema) {
        if (shema === void 0) { shema = SHEMA_DEFAULT_NAME; }
        return "[".concat(shema, "].[").concat(tableName, "] as [").concat(tableAlias ? tableAlias : tableName, "]");
    };
    SelectBuilder.prototype.concatColName = function (col) {
        return "[".concat(col.table, "].[").concat(col.name, "] ").concat(col.alias ? "as [".concat(col.alias, "]") : "");
    };
    return SelectBuilder;
}());
var Bulder = (function () {
    function Bulder(shema) {
        this.shema = shema;
        this.selectlBuilder = new SelectBuilder(shema);
    }
    Bulder.prototype.select = function (columns) {
        if (columns = null) {
            return this.selectlBuilder.select(columns);
        }
        else {
            return this.selectlBuilder;
        }
    };
    Bulder.prototype.update = function () {
        return "";
    };
    Bulder.prototype["delete"] = function () {
        return "";
    };
    return Bulder;
}());
exports.Bulder = Bulder;
