"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var VerifyRouter_1 = __importDefault(require("./VerifyRouter"));
var pubCert = fs_1["default"].readFileSync('C:\\Work\\core\\secret\\pub.pem');
var route = (0, VerifyRouter_1["default"])(pubCert);
exports["default"] = route;
