"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupColors = void 0;
function groupColors(colorsLib, groupPrefixes) {
    var groups = new Map();
    groupPrefixes.forEach(function (prefix) {
        groups.set(prefix, []);
    });
    var other = [];
    groups.set('other', other);
    for (var _i = 0, _a = Object.entries(colorsLib); _i < _a.length; _i++) {
        var color = _a[_i];
        var prefix = color[0].split('-')[0];
        if (groupPrefixes.includes(prefix)) {
            var group = groups.get(prefix);
            group.push(color);
        }
        else {
            other.push(color);
        }
    }
    return Object.fromEntries(groups.entries());
}
exports.groupColors = groupColors;
