"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TodoControllers_1 = __importDefault(require("./Controllers/TodoControllers"));
var routes = express_1.Router();
routes.get('/task', TodoControllers_1.default.listTask);
routes.post('/task', TodoControllers_1.default.createTask);
routes.put('/task/:id', TodoControllers_1.default.updateTask);
routes.delete('/task/:id', TodoControllers_1.default.deleteTask);
exports.default = routes;
