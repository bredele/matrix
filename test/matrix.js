
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
		assert(mat.size);
	});

});


describe("basic matrix", function() {

	var mat;
	beforeEach(function() {
		mat = matrix(
			[1, 0],
			[0, 1]
		);
	});
	

	it("should initialize matrix", function() {
		assert.equal(mat.get(1, 1), 1);
		assert.equal(mat.get(1, 2), 0);
		assert.equal(mat.get(2,1), 0);
		assert.equal(mat.get(2,2), 1);
	});

});

