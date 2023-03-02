"use strict";
exports.__esModule = true;
exports.RoleService = exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    return UserService;
}());
exports.UserService = UserService;
var RoleService = /** @class */ (function () {
    function RoleService(roleRepository) {
        this.roleRepository = roleRepository;
    }
    RoleService.prototype.getById = function (id) {
        var entityt = this.roleRepository.getById(id);
        return {};
    };
    RoleService.prototype.getAll = function (filter) {
        throw new Error('Method not implemented.');
    };
    RoleService.prototype.create = function (request) {
        throw new Error('Method not implemented.');
    };
    RoleService.prototype.update = function (id, request) {
        throw new Error('Method not implemented.');
    };
    RoleService.prototype["delete"] = function (id) {
        throw new Error('Method not implemented.');
    };
    RoleService.prototype.convertToIRoleResponse = function (entity) {
        var response = entity;
        return;
    };
    return RoleService;
}());
exports.RoleService = RoleService;
