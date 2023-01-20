"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AuthController = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
function AuthController(service) {
    return router.post('/login', function (req, res) {
        console.log(req.body);
        var token = service.login(req.body.username, "");
        res.json({ idToken: token });
    });
}
exports.AuthController = AuthController;
