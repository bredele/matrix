
/**
 * Expose 'matrix'
 */

module.exports = Matrix;


/**
 * Multi dimensional matrix.
 * 
 * Examples:
 *
 *   var mat = new Matrix();
 *   var mat = new Matrix(
 *     [2, 1],
 *     [1, 0]
 *   );
 *   
 * @api public
 */

function Matrix() {
  this.entries = [].slice.call(arguments) || [];
}


/**
 * Get matrix entry.
 *
 * Examples:
 *
 *   mat.get(1, 1);
 * 
 * @return {Number}
 * @api public
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


/**
 * Matrix size.
 *
 * Examples:
 *
 *   mat.size(); // => [2, 2]
 *   
 * @return {Array}
 * @api public
 */

Matrix.prototype.size = function() {
  return [this.entries.length, this.entries[0].length];
};
