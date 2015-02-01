/**
History class contains the data and operations needed for the undo/redo functionality
**/
var History = Base.extend({
	
	/**
	The history array contains the shapes that have been drawn so far
	**/
	history: [],
	
	/**
	The index variable points to the array location of the last drawn shape
	**/
	count: 0,
	
	/**
	DrawHistory function draws all shapes(up to the count location) on the given canvas.
	
	@param {object} context* The canvas context to be drawn on
	**/
	drawHistory: function (canvas, context) {
		"use strict";
		
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		var i;
		for (i = 0; i < this.count; i += 1) {
			this.history[i].draw(context);
		}
	},
	
	/**
	Undo operation decrements the count variable(if applicable) and draws all shapes up to that number onto the canvas
	
	@param {object} canvas* The canvas to be drawn on
	@param {object} context* The canvas context
	**/
	undo: function (canvas, context) {
		"use strict";
		
		if (this.count > 0) {
			this.count -= 1;
			context.clearRect(0, 0, canvas.width, canvas.height);
			this.drawHistory(canvas, context);
		}
	},
	
	/**
	Redo operation increments the count variable(if applicable) and draws all shapes.
	
	@param {object} context* The context to be drawn on
	**/
	redo: function (context) {
		"use strict";
		
		if (this.count < this.history.length) {
			this.history[this.count].draw(context);
			this.count += 1;
		}
	},
	
	/**
	Adds a shape to history, all undone shapes are lost in the process
	
	@param {object} newShape* The shape to be added to the array
	**/
	addShape: function (newShape) {
		"use strict";
		
		while (this.count < this.history.length) {
			this.history.pop();
		}
		
		this.history.push(newShape);
		this.count += 1;
	},
	
	/**
	Function for selecting a specific object in history based on point clicked on canvas
	
	@param {Point} p* A given point
	@return {object} The first object in history wherein the point p lies
	**/
	findShape: function (p) {
		"use strict";
		
		for (var i = this.count - 1; i >= 0; i -= 1) {
			if (this.history[i].containsPoint(p)) {
				return this.history[i];
			}
		}
		return {};
	}
});