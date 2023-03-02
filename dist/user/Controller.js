"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path = "/user";
var router = express_1["default"].Router();
function default_1() {
    return router.post(path, function () { });
}
exports["default"] = default_1;
