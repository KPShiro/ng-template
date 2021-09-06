export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
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
    },
    moduleNameMapper: {
        "@app(.*)": "<rootDir>/src/app/$1",
        "@assets(.*)": "<rootDir>/src/assets/$1",
    }
};
