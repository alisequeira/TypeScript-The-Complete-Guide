"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollection.prototype.compare = function (leftIndex, rightIdex) {
        return this.data[leftIndex] > this.data[rightIdex];
    };
    NumberCollection.prototype.swap = function (leftIndex, rightIdex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIdex];
        this.data[rightIdex] = leftHand;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
