"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
//TYPE ASSERTION
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = []; //this means that we are expecting an array of arrays[2D array ,each rows inside] that have the data type as same as MAtchdata
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        });
    }
}
exports.CsvFileReader = CsvFileReader;
