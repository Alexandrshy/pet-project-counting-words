module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "globals": {
        "SyntheticEvent": true,
        "HTMLButtonElement": true,
        "fetch": true,
    },
    "extends": "airbnb"
};