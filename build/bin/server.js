"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../src/app"));
var PORT = 4560;
app_1.default.on('ready', function () {
    app_1.default.listen(PORT, function () { return console.log("Servidor rodando, PORT: " + PORT); });
});
