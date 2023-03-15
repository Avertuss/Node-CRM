"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(cert) {
    return function (req, res, next) {
        var authorization = req.headers["authorization"];
        var token = authorization.replace(/^Bearer\s+/, "");
        jsonwebtoken_1["default"].verify(token, cert, function (err, decoded) {
            if (err == null) {
                req.currentUser = decoded;
                next();
            }
            else {
                res.status(401).send({ "message": "Unauthorized" }).end();
                return;
            }
        });
    };
}
exports["default"] = default_1;
