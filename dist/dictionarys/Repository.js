"use strict";
exports.__esModule = true;
exports.Repository = void 0;
var json_sql_1 = require("../json-sql");
var Repository = (function () {
    function Repository(shema) {
        this.builder = new json_sql_1.Bulder(shema);
    }
    Repository.prototype.create = function (entity) {
        throw new Error('Method not implemented.');
    };
    Repository.prototype.update = function (entity) {
        throw new Error('Method not implemented.');
    };
    Repository.prototype["delete"] = function (id) {
        throw new Error('Method not implemented.');
    };
    Repository.prototype.getById = function (id) {
        throw new Error('Method not implemented.');
    };
    Repository.prototype.getAll = function (filter) {
        var select = this.builder.select().build();
        console.log(select);
        return new Promise(function (resolve) {
            var data = { id: 10, createdOn: new Date(Date.now()), createdBy: { "id": "1", name: "system" }, "name": "custom" };
            resolve([data]);
        });
    };
    return Repository;
}());
exports.Repository = Repository;
