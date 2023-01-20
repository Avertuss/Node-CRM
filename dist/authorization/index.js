"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var fs_1 = __importDefault(require("fs"));
var cert = fs_1["default"].readFileSync('C:\\Work\\core\\secret\\key.pem');
var AuthController_1 = require("./AuthController");
var AuthService_1 = require("./AuthService");
var VerifyRouter_1 = __importDefault(require("./VerifyRouter"));
/*
module.exports.controller = controller;
module.exports.service = service;
module.exports = controller(new service(jwt,cert));
*/
var auth = (0, AuthController_1.AuthController)(new AuthService_1.AuthService(jsonwebtoken_1["default"].sign, cert));
auth.all('/', VerifyRouter_1["default"]);
exports["default"] = auth;
