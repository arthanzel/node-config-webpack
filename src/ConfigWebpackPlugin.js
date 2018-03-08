import webpack from "webpack";

const DEFAULT_NS = "CONFIG";

export default class ConfigWebpackPlugin {
    constructor(ns = DEFAULT_NS, configObject = require("config")) {
        // return new webpack.DefinePlugin(collapseObject(configObject, prefix, recurseLimit));

        // Deep-copy the config to avoid mutating
        let config = JSON.parse(JSON.stringify(configObject));

        // Webpack's DefinePlugin performs direct text replacement,
        // so it is important that primitive values be quoted.
        stringifyPrimitives(config);

        // Wrap the config in a namespace
        if (ns) {
            const wrapper = {};
            wrapper[ns] = config;
            config = wrapper;
        }

        return new webpack.DefinePlugin(config);
    }
}

function stringifyPrimitives(obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        const val = obj[key];

        if (isArray(val) || isObject(val)) {
            stringifyPrimitives(val);
        }
        else {
            obj[key] = JSON.stringify(val);
        }
    }
}

function isArray(obj) {
    return Array.isArray(obj);
}

function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}

