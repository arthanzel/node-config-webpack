import { assert } from "chai";
import { describe, it } from "mocha";
import path from "path";
import webpack from "webpack";

import ConfigWebpackPlugin from "../src/ConfigWebpackPlugin";

describe("Config Webpack Plugin", function() {
    this.timeout(5000);

    it("Produces out with the correct substitutions", function(done) {
        const plugin = new ConfigWebpackPlugin();

        webpack({
            entry: "./test-resources/testDefaultNS",
            output: { filename: "testDefaultNS.js" }, // dist/testOutput.js
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            const out = require("../dist/testDefaultNS");

            done();
        });
    });

    it("Produces a plugin with a custom namespace", function() {
        const plugin = new ConfigWebpackPlugin("myConfig");

        webpack({
            entry: "./test-resources/testCustomNS",
            output: { filename: "testCustomNS.js" }, // dist/testOutput.js
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            const out = require("../dist/testCustomNS");

            done();
        });
    });

    it("Produces a plugin with a blank namespace", function() {
        const plugin = new ConfigWebpackPlugin("");

        webpack({
            entry: "./test-resources/testBlankNS",
            output: { filename: "testBlankNS.js" }, // dist/testOutput.js
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            const out = require("../dist/testBlankNS");

            done();
        });
    });
});
