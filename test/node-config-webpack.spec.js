import { assert } from "chai";
import { describe, it } from "mocha";
import path from "path";
import webpack from "webpack";

import ConfigWebpackPlugin from "../index";

describe("Config Webpack Plugin", function() {
    this.timeout(8000);

    it("Produces output with the correct substitutions", function(done) {
        const plugin = new ConfigWebpackPlugin();

        webpack({
            entry: "./test-resources/testDefaultNS",
            output: {
                path: path.join(__dirname, "../dist"),
                filename: "testDefaultNS.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../dist/testDefaultNS");

            done();
        });
    });

    it("Produces output with a custom namespace", function(done) {
        const plugin = new ConfigWebpackPlugin("myConfig");

        webpack({
            entry: "./test-resources/testCustomNS",
            output: {
                path: path.join(__dirname, "../dist"),
                filename: "testCustomNS.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../dist/testCustomNS");

            done();
        });
    });

    it("Produces output with a blank namespace", function(done) {
        const plugin = new ConfigWebpackPlugin("");

        webpack({
            entry: "./test-resources/testBlankNS",
            output: {
                path: path.join(__dirname, "../dist"),
                filename: "testBlankNS.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../dist/testBlankNS");

            done();
        });
    });
});
