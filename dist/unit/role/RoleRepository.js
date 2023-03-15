"use strict";
exports.__esModule = true;
exports.RoleRepository = void 0;
var json_sql_1 = require("../../json-sql");
var RoleRepository = (function () {
    function RoleRepository(shema) {
        this.shema = shema;
        this.builder = new json_sql_1.Bulder(shema);
        this.cache = new Map();
        this.cache.set(1, { "id": 1,
            "name": "manager", "permission": new Set([
                {
                    "id": 1,
                    "code": "contact",
                    "name": "Контакты",
                    "lvl": 3
                },
                {
                    "id": 2,
                    "code": "role",
                    "name": "Роли",
                    "lvl": 1
                }
            ])
        });
        this.sequins = 2;
    }
    RoleRepository.prototype.create = function (entity) {
        var _this = this;
        return new Promise(function (resolve) {
            var key = ++_this.sequins;
            _this.cache.set(key, entity);
            resolve(_this.cache.get(key));
        });
    };
    RoleRepository.prototype.update = function (entity) {
        return new Promise(function (resolve) {
        });
    };
    RoleRepository.prototype["delete"] = function (id) {
        return new Promise(function (resolve) {
        });
    };
    RoleRepository.prototype.getById = function (id) {
        var _this = this;
        var sql = this.builder.select().where("id", id).build();
        console.log(sql);
        return new Promise(function (resolve) {
            resolve(_this.cache.get(id));
        });
    };
    RoleRepository.prototype.getAll = function (filter) {
        var _this = this;
        var sql = this.builder.select().build();
        console.log(sql);
        return new Promise(function (resolve) {
            resolve(Array.from(_this.cache.values()));
        });
    };
    return RoleRepository;
}());
exports.RoleRepository = RoleRepository;
