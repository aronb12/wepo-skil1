/**
Selection class is built around the operations required to move already existent objects on a canvas
**/
var Selection = Base.extend({
	/**
	Default constructor
	**/
	constructor: function (history) {
		"use strict";
		
		this.selectedShape = {};
		this.startPoint = {};
		this.deltaX = 0;
		this.deltaY = 0;
	},
	
	/**
	Function for selecting an item from history that needs to be moved
	
	@param {Point} p* Point on the canvas that the user has clicked
	@param {History} hist* History object that may contain the item
	**/
	selectShape: function (p, hist) {
		"use strict";
		
		this.selectedShape = hist.findShape(p);
		this.startPoint = p;
		console.log(this.startPoint.x + ", " + this.startPoint.y);
	},
	
	/**
	Function for moving the selected shape.
	The entire history has to be redrawn every time the item is moved
	
	@param {Point} p* Point on the canvas to where the mouse cursor has been moved
	@param {object} canvas* The canvas to be drawn on
	@param {object} context* The canvas context
	**/
	moveShape: function (p, hist, canvas, context) {
		"use strict";
		
		// if we have already selected a shape
		if (Object.keys(this.selectedShape).length > 0) {
			this.calcDelta(p);
			this.startPoint = p;
			this.selectedShape.move(this.deltaX, this.deltaY);
			
			hist.drawHistory(canvas, context);
		}
	},
	
	/**
	Function for calculating the change in location
	
	@param {Point} p* The point to which the mouse has been moved
	**/
	calcDelta: function (p) {
		"use strict";
		
		this.deltaX = p.x - this.startPoint.x;
		this.deltaY = p.y - this.startPoint.y;
	}
});