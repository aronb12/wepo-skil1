/**
A single point on a canvas element.
Is used by all objects that are drawn.
**/
var Point = Base.extend({
	
	/**
	Parameterized constructor.
	
	@param {number} x* A points x-value
	@param {number} y* A points y-value
	@return {Point} A Point instance with coordinates (x, y)
	**/
	constructor: function (x, y) {
		"use strict";
		
		this.x = x;
		this.y = y;
	},
	
	/**
	Function that calculates the distance from another point in the second power
	
	@param {Point} that* A Point instance
	@return {number} The distance in the second power
	**/
	distTo: function (that) {
		"use strict";
		return Math.sqrt(Math.pow((that.x - this.x), 2) +
						 Math.pow((that.y - this.y), 2));
	}
});