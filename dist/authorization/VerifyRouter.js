"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var fs_1 = __importDefault(require("fs"));
var router = express_1["default"].Router();
var cert = fs_1["default"].readFileSync('C:\\Work\\core\\secret\\pub.pem');
function default_1(req, res, next) {
    var token = req.headers["authorization"];
    token = token.replace(/^Bearer\s+/, "");
    jsonwebtoken_1["default"].verify(token, cert, function (err, decoded) {
        if (err == null) {
            console.log(decoded); // bar
            next();
        }
    });
    next();
}
exports["default"] = default_1;
