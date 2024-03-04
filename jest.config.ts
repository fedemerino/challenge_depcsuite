/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  transform: {},
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
}

export default config
