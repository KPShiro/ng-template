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
    transform: {
        '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    moduleNameMapper: {
        "@app(.*)": "<rootDir>/src/app/$1",
        "@assets(.*)": "<rootDir>/src/assets/$1",
    }
};
