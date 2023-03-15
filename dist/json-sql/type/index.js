"use strict";
exports.__esModule = true;
exports.Operator = exports.Comparison = void 0;
var Comparison;
(function (Comparison) {
    Comparison[Comparison["EQUALS"] = "="] = "EQUALS";
    Comparison[Comparison["LESS"] = "<"] = "LESS";
    Comparison[Comparison["MORE"] = ">"] = "MORE";
    Comparison[Comparison["IN"] = "IN"] = "IN";
    Comparison[Comparison["NOT_IN"] = "NOT IN"] = "NOT_IN";
    Comparison[Comparison["IS_NULL"] = "IS NULL"] = "IS_NULL";
    Comparison[Comparison["NOT_NULL"] = "NOT NULL"] = "NOT_NULL";
    Comparison[Comparison["EXISTS"] = "EXISTS"] = "EXISTS";
    Comparison[Comparison["LIKE"] = "LIKE"] = "LIKE";
})(Comparison = exports.Comparison || (exports.Comparison = {}));
var Operator;
(function (Operator) {
    Operator[Operator["AND"] = "AND"] = "AND";
    Operator[Operator["OR"] = "OR"] = "OR";
    Operator[Operator["NOT_EQUALS"] = "<>"] = "NOT_EQUALS";
})(Operator = exports.Operator || (exports.Operator = {}));
