import { assert } from "chai";
import { describe, it } from "mocha";
import webpack from "webpack";

import ConfigWebpackPlugin from "../src/ConfigWebpackPlugin";

describe("Config Webpack Plugin", function() {
    it("Produces a plugin with correct substitutions", function() {
        const defs = new ConfigWebpackPlugin().definitions;
        assert.equal(defs["CONFIG.integer"],  '3');
        assert.equal(defs["CONFIG.decimal"],  '2.71');
        assert.equal(defs["CONFIG.string"],   '"Hello"');
        assert.equal(defs["CONFIG.true"],     'true');
        assert.equal(defs["CONFIG.false"],    'false');
        assert.equal(defs["CONFIG.null"],     'null');
        assert.equal(defs["CONFIG.array[0]"], '1');
        assert.equal(defs["CONFIG.array[1]"], 'true');
        assert.equal(defs["CONFIG.array[2]"], '"three"');

        assert.equal(defs["CONFIG.complexArray[0]"],                 '1');
        assert.equal(defs["CONFIG.complexArray[1][0]"],             '-1');
        assert.equal(defs["CONFIG.complexArray[1][1]"],             '-2');
        assert.equal(defs["CONFIG.complexArray[1][2][0]"],          '-3');
        assert.equal(defs["CONFIG.complexArray[1][2][1].value"],    '-3.5');
        assert.equal(defs["CONFIG.complexArray[1][3]"],             '-4');
        assert.equal(defs["CONFIG.complexArray[2].answer"],         '42');
        assert.equal(defs["CONFIG.complexArray[2].array[0].one"],   '1');
        assert.equal(defs["CONFIG.complexArray[2].array[1]"],       '2');
        assert.equal(defs["CONFIG.complexArray[2].array[2]"],       '3');

        assert.equal(defs["CONFIG.object.nestedInteger"], '10');
        assert.equal(defs["CONFIG.object.nestedString"], '"Nested"');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedNull"], 'null');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedArray[0].deepObject"], 'true');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedArray[0].deepArray[0]"], '7');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedArray[0].deepArray[1]"], '8');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedArray[0].deepArray[2]"], '9');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedArray[1]"], '10');
        assert.equal(defs["CONFIG.object.nestedObject.doublyNestedArray[2].deepDecimal"], '3.14');
    });

    it("Produces a plugin with optional namespace", function() {
        const defs = new ConfigWebpackPlugin(require("config"), "myConfig").definitions;
        assert.equal(defs["myConfig.integer"], 3);
    });

    it("Produces a plugin with empty namespace", function() {
        const defs = new ConfigWebpackPlugin(require("config"), "").definitions;
        assert.equal(defs["integer"], '3');
        assert.equal(defs["array[0]"], '1');
    });

    it("Doesn't recurse indefinitely", function(done) {
        const root = {};
        let config = root;
        for (let i = 0; i < 60; i++) {
            config.nested = {};
            config = config.nested;
        }

        try {
            const defs = new ConfigWebpackPlugin(root, "").definitions;
        }
        catch (e) {
            done();
            return;
        }
        assert.fail();
    });

    it.only("Works in Webpack", function(done) {
        this.timeout(5000);
        console.log(new ConfigWebpackPlugin().definitions);

        webpack({
            entry: "./test-resources/testIndex",
            output: { filename: "testOutput.js" }, // dist/testOutput.js
            plugins: [
                new ConfigWebpackPlugin(),
                new webpack.DefinePlugin({
                    myArray: [1,2,3]
                })
            ]
        }, (err, stats) => {
            done();
        });
    });
});