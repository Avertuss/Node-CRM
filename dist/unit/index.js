"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.roleController = void 0;
var RoleController_1 = __importDefault(require("./RoleController"));
var Service_1 = require("./Service");
var Repository_1 = require("./Repository");
var path = "/role";
var repository = new Repository_1.RoleRepository();
var servise = new Service_1.RoleService(repository);
exports.roleController = (0, RoleController_1["default"])(servise, path);
