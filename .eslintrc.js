module.exports = {
    extends: ['react-app'],
    rules: {
        'max-len': ['error', 80, 2, {
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: false,
        }],
    }
};
