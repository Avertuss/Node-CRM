"use strict";
exports.__esModule = true;
exports.isPemite = void 0;
var isPemite = function (lvl, code) {
    return function (req, res, next) {
        var permission = req.currentUser.permission.find(function (per) { return per.code === code; });
        if (permission.lvl >= lvl) {
            next();
        }
        else {
            res.status(403).send({ "message": "ACCESS_DENIED" });
        }
    };
};
exports.isPemite = isPemite;
