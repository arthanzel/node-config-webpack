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
                path: path.join(__dirname, "../build"),
                filename: "testDefaultNS.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../build/testDefaultNS");

            done();
        });
    });

    it("Produces output with a custom namespace", function(done) {
        const plugin = new ConfigWebpackPlugin("myConfig");

        webpack({
            entry: "./test-resources/testCustomNS",
            output: {
                path: path.join(__dirname, "../build"),
                filename: "testCustomNS.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../build/testCustomNS");

            done();
        });
    });

    it("Produces output with a blank namespace", function(done) {
        const plugin = new ConfigWebpackPlugin("");

        webpack({
            entry: "./test-resources/testBlankNS",
            output: {
                path: path.join(__dirname, "../build"),
                filename: "testBlankNS.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../build/testBlankNS");

            done();
        });
    });

    it("Produces output with a custom config", function(done) {
        const config = {
            numberOfTusks: 3,
            colorOfTusks: "yellow",
            walruses: [
                { name: "Donald Tusk", age: 50 },
                { name: "Jamie Hyneman", age: 61 }
            ]
        };

        const plugin = new ConfigWebpackPlugin("CONFIG", config);

        webpack({
            entry: "./test-resources/testCustomConfig",
            output: {
                path: path.join(__dirname, "../build"),
                filename: "testCustomConfig.js"
            },
            plugins: [
                plugin
            ]
        }, (err, stats) => {
            if (err) {
                assert.fail();
            }

            const out = require("../build/testCustomConfig");

            done();
        });
    });
});
