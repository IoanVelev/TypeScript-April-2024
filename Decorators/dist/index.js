"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProduct = function (id) {
        console.log("Fetching product with id: ".concat(id));
    };
    __decorate([
        logger_1.Log
    ], ProductService.prototype, "getProduct", null);
    return ProductService;
}());
var product = new ProductService();
product.getProduct(34);
//# sourceMappingURL=index.js.map