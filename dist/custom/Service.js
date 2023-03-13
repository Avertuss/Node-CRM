"use strict";
exports.__esModule = true;
exports.Service = void 0;
var Service = (function () {
    function Service(roleRepository) {
        this.roleRepository = roleRepository;
    }
    Service.prototype.create = function (request) {
        throw new Error('Method not implemented.');
    };
    Service.prototype.update = function (id, request) {
        throw new Error('Method not implemented.');
    };
    Service.prototype["delete"] = function (id) {
        throw new Error('Method not implemented.');
    };
    Service.prototype.getById = function (id) {
        throw new Error('Method not implemented.');
    };
    Service.prototype.getAll = function (filter) {
        throw new Error('Method not implemented.');
    };
    return Service;
}());
exports.Service = Service;
