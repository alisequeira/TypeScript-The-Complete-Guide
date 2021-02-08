"use strict";
exports.__esModule = true;
/*Make a network request to fetch some JSON and print the result */
var axios_1 = require("axios");
var URL = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(URL).then(function (response) {
    console.log(response.data);
});
