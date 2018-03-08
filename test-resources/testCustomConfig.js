const assert = require("chai").assert;

assert.equal(CONFIG.numberOfTusks,  3);
assert.equal(CONFIG.colorOfTusks, "yellow");
assert.equal(CONFIG.walruses[0].name, "Donald Tusk");
assert.equal(CONFIG.walruses[0].age, 50);
assert.equal(CONFIG.walruses[1].name, "Jamie Hyneman");
assert.equal(CONFIG.walruses[1].age, 61);