"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AuthService = void 0;
var AuthData_json_1 = __importDefault(require("./AuthData.json"));
var AuthService = (function () {
    function AuthService(jwtSing, cert) {
        this.login = this.login.bind(this);
        this.jwtSing = jwtSing;
        this.cert = cert;
    }
    AuthService.prototype.login = function (auth) {
        var payload = {
            sub: auth.username,
            permission: AuthData_json_1["default"][auth.username].permission,
            roles: AuthData_json_1["default"][auth.username].roles
        };
        var token = this.jwtSing(payload, this.cert, { algorithm: 'RS256', expiresIn: 36000 });
        return __assign({ idToken: token }, AuthData_json_1["default"][auth.username]);
    };
    return AuthService;
}());
exports.AuthService = AuthService;
