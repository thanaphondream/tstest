"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const api_1 = require("../apitsxt/api");
router.post('/todo', api_1.api);
router.get('/todo', api_1.showapitodo);
router.get('/test', (req, res) => {
    res.send('Server is running...');
});
exports.default = router;
