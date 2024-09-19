"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showdatatodo = exports.nametsxt = void 0;
const db_1 = __importDefault(require("../prismats/db"));
const nametsxt = (name) => {
    console.log(name);
    return db_1.default.name.create({
        data: name
    });
};
exports.nametsxt = nametsxt;
const showdatatodo = () => {
    const rs = db_1.default.name.findMany();
    return rs;
};
exports.showdatatodo = showdatatodo;
