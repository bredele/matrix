
/**
 * Expose 'matrix'
 */

module.exports = Matrix;


/**
 * Matrix constructor.
 * @api public
 */

function Matrix() {
  this.entries = [].slice.call(arguments) || [];
}

/**
 * [get description]
 * @return {[type]} [description]
 */

Matrix.prototype.get = function(row, column) {
 return this.entries[row - 1][column - 1];
};


/**
 * Set matrix entry.
 *
 * Examples:
 *
 *   matrix.set(1, 1, 10);
 *   
 * @param {Number} row
 * @param {Number} column 
 * @param {Number} value
 * @api public
 */

Matrix.prototype.set = function(row, column, value) {
  this.entries[row - 1][column - 1] = value;
  return this;
};


Matrix.prototype.row = function() {

};


Matrix.prototype.column = function() {
  // body...
};


Matrix.prototype.size = function() {
  return [this.entries.length, this.entries[0].length];
};
