"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.roleController = void 0;
var RoleController_1 = __importDefault(require("./RoleController"));
var Service_1 = require("./Service");
var RoleRepository_1 = require("./RoleRepository");
var shema_json_1 = __importDefault(require("./shema.json"));
var path = "/role";
var repository = new RoleRepository_1.RoleRepository(shema_json_1["default"]);
var servise = new Service_1.RoleService(repository);
exports.roleController = (0, RoleController_1["default"])(servise, path);
