import type { Config } from 'jest';

const config: Config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  silent: true,
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.ts'],
};

export default config;
