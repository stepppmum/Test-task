"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyToObject = void 0;
function keyToObject(keys, values) {
    return Object.fromEntries(keys.map(function (key) { return [key, values[key]]; }));
}
exports.keyToObject = keyToObject;
