"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var keyCert = fs_1["default"].readFileSync(path_1["default"].join(__dirname, '../../secret/key.pem'));
var AuthController_1 = require("./AuthController");
var AuthService_1 = require("./AuthService");
var auth = (0, AuthController_1.AuthController)(new AuthService_1.AuthService(jsonwebtoken_1["default"].sign, keyCert));
exports["default"] = auth;
