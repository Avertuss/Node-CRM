"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var authorization_1 = __importDefault(require("./authorization"));
var verifyrouter_1 = __importDefault(require("./verifyrouter"));
var user_1 = __importDefault(require("./user"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.use(express_1["default"].json()); // for parsing application/json
app.use(express_1["default"].urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(authorization_1["default"]);
app.use(verifyrouter_1["default"]);
app.use(user_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
