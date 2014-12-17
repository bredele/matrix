
/**
 * Test dependencies,
 */

var assert = require('assert');
var matrix = require('..');

describe("API", function() {
	
	it("should have the following api", function() {
		var mat = matrix();
		assert(mat.row);
		assert(mat.column);
		assert(mat.set);
		assert(mat.get);
	});
	
});
