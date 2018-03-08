import webpack from "webpack";

import collapseObject from "./collapseObject";

export default class ConfigWebpackPlugin {
    constructor(configObject = require("config"), prefix, recurseLimit) {
        return new webpack.DefinePlugin(collapseObject(configObject, prefix, recurseLimit));
    }
}

ConfigWebpackPlugin.collapseObject = collapseObject;

