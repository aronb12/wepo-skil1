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
	}
});