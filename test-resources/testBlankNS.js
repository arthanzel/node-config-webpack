const assert = require("chai").assert;

assert.equal(integer,  3);
assert.equal(decimal,  2.71);
assert.equal(string,   "Hello");
assert.equal(trueValue,     true);
assert.equal(falseValue,    false);
assert.equal(nullValue,     null);
assert.equal(array[0], 1);
assert.equal(array[1], true);
assert.equal(array[2], "three");

assert.equal(complexArray[0],                 1);
assert.equal(complexArray[1][0],             -1);
assert.equal(complexArray[1][1],             -2);
assert.equal(complexArray[1][2][0],          -3);
assert.equal(complexArray[1][2][1].value,    -3.5);
assert.equal(complexArray[1][3],             -4);
assert.equal(complexArray[2].answer,         42);
assert.equal(complexArray[2].array[0].one,   1);
assert.equal(complexArray[2].array[1],       2);
assert.equal(complexArray[2].array[2],       3);

assert.equal(object.nestedInteger, 10);
assert.equal(object.nestedString, "Nested");
assert.equal(object.nestedObject.doublyNestedNull, null);
assert.equal(object.nestedObject.doublyNestedArray[0].deepObject, true);
assert.equal(object.nestedObject.doublyNestedArray[0].deepArray[0], 7);
assert.equal(object.nestedObject.doublyNestedArray[0].deepArray[1], 8);
assert.equal(object.nestedObject.doublyNestedArray[0].deepArray[2], 9);
assert.equal(object.nestedObject.doublyNestedArray[1], 10);
assert.equal(object.nestedObject.doublyNestedArray[2].deepDecimal, 3.14);