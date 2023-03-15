"use strict";
exports.__esModule = true;
exports.RoleRepository = void 0;
var RoleRepository = (function () {
    function RoleRepository() {
        this.cache = new Map();
    }
    RoleRepository.prototype.create = function (entity) {
        this.cache.set(entity.id, entity);
        return entity;
    };
    RoleRepository.prototype.update = function (entity) {
        this.cache.set(entity.id, entity);
        return entity;
    };
    RoleRepository.prototype["delete"] = function (id) {
        var entity = this.cache.get(id);
        this.cache["delete"](id);
        return entity;
    };
    RoleRepository.prototype.getById = function (id) {
        return this.cache.get(id);
    };
    RoleRepository.prototype.getAll = function (filter) {
        throw new Error('Method not implemented.');
    };
    return RoleRepository;
}());
exports.RoleRepository = RoleRepository;
