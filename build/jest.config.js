"use strict";
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: "ts-jest",
    transform: {},
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
exports.default = config;
