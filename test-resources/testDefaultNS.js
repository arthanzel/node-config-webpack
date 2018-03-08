const assert = require("chai").assert;

assert.equal(CONFIG.integer,  3);
assert.equal(CONFIG.decimal,  2.71);
assert.equal(CONFIG.string,   "Hello");
assert.equal(CONFIG.trueValue,     true);
assert.equal(CONFIG.falseValue,    false);
assert.equal(CONFIG.nullValue,     null);
assert.equal(CONFIG.array[0], 1);
assert.equal(CONFIG.array[1], true);
assert.equal(CONFIG.array[2], "three");

assert.equal(CONFIG.complexArray[0],                 1);
assert.equal(CONFIG.complexArray[1][0],             -1);
assert.equal(CONFIG.complexArray[1][1],             -2);
assert.equal(CONFIG.complexArray[1][2][0],          -3);
assert.equal(CONFIG.complexArray[1][2][1].value,    -3.5);
assert.equal(CONFIG.complexArray[1][3],             -4);
assert.equal(CONFIG.complexArray[2].answer,         42);
assert.equal(CONFIG.complexArray[2].array[0].one,   1);
assert.equal(CONFIG.complexArray[2].array[1],       2);
assert.equal(CONFIG.complexArray[2].array[2],       3);

assert.equal(CONFIG.object.nestedInteger, 10);
assert.equal(CONFIG.object.nestedString, "Nested");
assert.equal(CONFIG.object.nestedObject.doublyNestedNull, null);
assert.equal(CONFIG.object.nestedObject.doublyNestedArray[0].deepObject, true);
assert.equal(CONFIG.object.nestedObject.doublyNestedArray[0].deepArray[0], 7);
assert.equal(CONFIG.object.nestedObject.doublyNestedArray[0].deepArray[1], 8);
assert.equal(CONFIG.object.nestedObject.doublyNestedArray[0].deepArray[2], 9);
assert.equal(CONFIG.object.nestedObject.doublyNestedArray[1], 10);
assert.equal(CONFIG.object.nestedObject.doublyNestedArray[2].deepDecimal, 3.14);