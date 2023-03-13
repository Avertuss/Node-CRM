"use strict";
exports.__esModule = true;
exports.toPage = exports.LVL = void 0;
var LVL;
(function (LVL) {
    LVL[LVL["READ"] = 1] = "READ";
    LVL[LVL["UPDATE"] = 2] = "UPDATE";
    LVL[LVL["DELETE"] = 3] = "DELETE";
})(LVL = exports.LVL || (exports.LVL = {}));
function toPage(array) {
    return { data: array, count: array.length };
}
exports.toPage = toPage;
