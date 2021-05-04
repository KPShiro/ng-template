export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [
        '<rootDir>/setupJest.ts'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/e2e/'
    ],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$'
        }
    }
};
