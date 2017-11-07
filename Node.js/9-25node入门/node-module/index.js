//使用工具函数那个模块中的函数
let u = require("./utils.js")
console.log(u);//返回的是 utils.js文件中module..exports挂在的属性
let http = require("http");
console.log(http);
let fs = require("fs");
// console.log(fs);