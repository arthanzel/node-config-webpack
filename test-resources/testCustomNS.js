const assert = require("chai").assert;

assert.equal(myConfig.integer,  3);
assert.equal(myConfig.decimal,  2.71);
assert.equal(myConfig.string,   "Hello");
assert.equal(myConfig.trueValue,     true);
assert.equal(myConfig.falseValue,    false);
assert.equal(myConfig.nullValue,     null);
assert.equal(myConfig.array[0], 1);
assert.equal(myConfig.array[1], true);
assert.equal(myConfig.array[2], "three");

assert.equal(myConfig.complexArray[0],                 1);
assert.equal(myConfig.complexArray[1][0],             -1);
assert.equal(myConfig.complexArray[1][1],             -2);
assert.equal(myConfig.complexArray[1][2][0],          -3);
assert.equal(myConfig.complexArray[1][2][1].value,    -3.5);
assert.equal(myConfig.complexArray[1][3],             -4);
assert.equal(myConfig.complexArray[2].answer,         42);
assert.equal(myConfig.complexArray[2].array[0].one,   1);
assert.equal(myConfig.complexArray[2].array[1],       2);
assert.equal(myConfig.complexArray[2].array[2],       3);

assert.equal(myConfig.object.nestedInteger, 10);
assert.equal(myConfig.object.nestedString, "Nested");
assert.equal(myConfig.object.nestedObject.doublyNestedNull, null);
assert.equal(myConfig.object.nestedObject.doublyNestedArray[0].deepObject, true);
assert.equal(myConfig.object.nestedObject.doublyNestedArray[0].deepArray[0], 7);
assert.equal(myConfig.object.nestedObject.doublyNestedArray[0].deepArray[1], 8);
assert.equal(myConfig.object.nestedObject.doublyNestedArray[0].deepArray[2], 9);
assert.equal(myConfig.object.nestedObject.doublyNestedArray[1], 10);
assert.equal(myConfig.object.nestedObject.doublyNestedArray[2].deepDecimal, 3.14);