"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorted_1 = require("./Sorted");
var NumberCollection_1 = require("./NumberCollection");
var numberCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
var sorter = new Sorted_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
