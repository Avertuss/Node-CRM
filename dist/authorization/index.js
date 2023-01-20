"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.VerifyRouter = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var fs_1 = __importDefault(require("fs"));
var cert = fs_1["default"].readFileSync('C:\\Work\\core\\secret\\key.pem');
var AuthController_1 = require("./AuthController");
var AuthService_1 = require("./AuthService");
var VerifyRouter_1 = __importDefault(require("./VerifyRouter"));
exports.VerifyRouter = VerifyRouter_1["default"];
exports["default"] = (0, AuthController_1.AuthController)(new AuthService_1.AuthService(jsonwebtoken_1["default"].sign, cert));
