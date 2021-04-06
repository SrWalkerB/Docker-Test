"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var connect_1 = __importDefault(require("./database/connect"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
var app = express_1.default();
connect_1.default().then(function (resp) { return app.emit(resp); });
app.use(express_1.default.json());
app.use(routes_1.default);
exports.default = app;
