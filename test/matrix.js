
/**
 * Test dependencies,
 */

var assert = require('assert');
var Matrix = require('..');

describe("API", function() {
	
	it("should have the following api", function() {
		var mat = new Matrix();
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
		mat = new Matrix(
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

	it('should update matrix', function() {
    mat.set(1, 2, 4);
    assert.equal(mat.get(1, 2), 4);
	});

	it('should return matrix size', function() {
		var size = mat.size();
		assert.equal(size[0], 2);
		assert.equal(size[1], 2);
	});

});

