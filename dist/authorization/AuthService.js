"use strict";
exports.__esModule = true;
exports.AuthService = void 0;
var AuthService = /** @class */ (function () {
    function AuthService(jwtSing, cert) {
        this.login = this.login.bind(this);
        this.jwtSing = jwtSing;
        this.cert = cert;
    }
    AuthService.prototype.login = function (username, password) {
        var payload = {
            sub: username
        };
        var token = this.jwtSing(payload, this.cert, { algorithm: 'RS256', expiresIn: 120 });
        return token;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
