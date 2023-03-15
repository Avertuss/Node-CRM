"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Controller = void 0;
var Controller_1 = __importDefault(require("./Controller"));
var Service_1 = require("./Service");
var Repository_1 = require("./Repository");
var contact_json_1 = __importDefault(require("./data/contact.json"));
var repository = new Repository_1.Repository(contact_json_1["default"]);
var servise = new Service_1.Service(repository);
exports.Controller = (0, Controller_1["default"])(servise);
