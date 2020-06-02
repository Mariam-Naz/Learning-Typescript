"use strict";
//Modules concept
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(3, 4);
var x = point.x; //property thats why no pbrackets
point.x = 9;
point.draw();
