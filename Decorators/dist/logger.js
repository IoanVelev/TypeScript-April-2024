"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
function Log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method ".concat(propertyKey, " called with args: ").concat(JSON.stringify(args)));
        return originalMethod.apply(this, args);
    };
}
exports.Log = Log;
//# sourceMappingURL=logger.js.map