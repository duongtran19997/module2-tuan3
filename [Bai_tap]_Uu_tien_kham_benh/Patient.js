"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this._name = name;
        this._code = code;
    }
    Patient.prototype.getName = function () {
        return this._name;
    };
    Patient.prototype.getCode = function () {
        return this._code;
    };
    return Patient;
}());
exports.Patient = Patient;
