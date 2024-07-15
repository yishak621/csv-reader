"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringTODate = void 0;
const dateStringTODate = (dateString) => {
    //28/10/2018
    const dateParts = dateString.split("/").map((value) => {
        return parseInt(value);
    });
    //the first argumnet is the year,month and date
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringTODate = dateStringTODate;
