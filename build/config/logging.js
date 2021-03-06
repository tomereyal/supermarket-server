"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    const dateString = new Date().toISOString();
    const time = dateString.split("T")[1].split(".")[0];
    return time;
};
const warn = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};
const info = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};
const debug = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};
exports.default = {
    info,
    warn,
    error,
    debug,
};
