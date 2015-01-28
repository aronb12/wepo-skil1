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

/**
A superclass for complex shapes.
Is not intended to be instantiated
**/
var Shape = Base.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Shapes start point
	@param {Point}	p2* Shapes end point
	@param {string}	strokeColor* Shapes line color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth) {
		"use strict";
		
		this.p1 = p1;
		this.p2 = p2;
		this.strokeColor = strokeColor;
		this.lineWidth = lineWidth;
	},
	
	/**
	A draw function for shapes.
	Is only a single line of code that is executed by all shapes.
	
	@param {object} canvas* The canvas context to be drawn on
	**/
	draw: function (canvas) {
		"use strict";
		
		canvas.beginPath();
	}
});

/**
A single line that can be drawn on a canvas
**/
var Line = Base.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Lines start point
	@param {Point}	p2* Lines end point
	@param {string}	strokeColor* Lines color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
	},
	
	/**
	Draw function to draw the line on a canvas
	
	@param {object} canvas* The canvas context to be drawn on.
	**/
	draw: function (canvas) {
		"use strict";
		
		this.base(canvas);
		canvas.moveTo(this.p1.x, this.p1.y);
		canvas.lineTo(this.p2.x, this.p2.y);
	}
});

/**
Rectangle shape that can be drawn on a canvas.
**/
var Rectangle = Shape.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Rectangle start point
	@param {Point}	p2* Rectangle end point
	@param {string}	strokeColor* Rectangles line color
	@param {string}	fillColor* Rectangles fill color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth, fillColor) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
		this.fillColor = fillColor;
		this.drawFinish = this.drawSelections[0];
	},
	
	/**
	Function for drawing on canvas
	
	@param {object} canvas* The canvas context to be drawn on
	**/
	draw: function (canvas) {
		"use strict";
		
		this.base(canvas);
		canvas.rect(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
		this.drawFinish(canvas);
	},
	
	/**
	An array of functions for drawing the rectangle.
	**/
	drawSelections: [
		
		/**
		Function for drawing a filled rectangle on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			canvas.fillStyle = this.fillColor;
			canvas.fill();
		},
		
		/**
		Function for drawing a rectangle border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			canvas.lineWidth = this.lineWidth;
			canvas.strokeStyle = this.strokeColor;
			canvas.stroke();
		},
		
		/**
		Function for drawing a filled rectangle with border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			this.drawFinish = this.drawSelections[0];
			this.drawFinish(canvas);
			
			this.drawFinish = this.drawSelections[1];
			this.drawFinish(canvas);
		}
	],
	
	/**
	Function for changing the selected drawing function
	
	@param {number} index* The index of the function in the drawSelection array
	**/
	selectDraw: function (index) {
		"use strict";
		
		this.drawFinish = this.drawSelections[index];
	}
});

/**
Circle shape that can be drawn on a canvas.
**/
var Circle = Shape.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Input start point
	@param {Point}	p2* Input end point
	@param {string}	strokeColor* Circle line color
	@param {string}	fillColor* Circle fill color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth, fillColor) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
		
		this.center = this.getCenter();
		this.radius = this.getRadius();
		this.fillColor = fillColor;
		this.drawFinish = this.drawSelections[0];
	},
	
	/**
	Helper function for finding the circle radius
	
	@return {number} The radius as a number
	**/
	getRadius: function () {
		"use strict";
		var x = Math.pow((this.p1.x - this.center.x), 2.0),
			y = Math.pow((this.p1.y - this.center.y), 2.0);
			
		return Math.sqrt(y + x);
	},
	
	/**
	Helper function for calculating the center of the circle.
	
	@return {Point} The center of the circle as a Point object
	**/
	getCenter: function () {
		"use strict";
	
		var centerX = 0,
			centerY = 0,
			deltaX = this.p2.x - this.p1.x,
			deltaY = this.p2.y - this.p1.y,
			delta = 0;
		
		if (Math.abs(deltaX) < Math.abs(deltaY)) {
			delta = deltaX / 2;
			centerX = delta + this.p1.x;
			centerY = ((deltaY / Math.abs(deltaY)) * delta) + this.p1.y;
		} else {
			centerY = deltaY / 2;
			centerX = (deltaX / Math.abs(deltaX)) * centerY;
		}
		return new Point(centerX, centerY);
	},
	
	/**
	Function for drawing on canvas
	
	@param {object} canvas* The canvas context to be drawn on
	**/
	draw: function (canvas) {
		"use strict";
		
		this.base(canvas);
		canvas.arc(this.center.x, this.center.y, this.radius, 2 * Math.PI, false);
		this.drawFinish(canvas);
	},
	
	/**
	An array of functions for drawing the circle.
	**/
	drawSelections: [
		
		/**
		Function for drawing a filled circle on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			canvas.fillStyle = this.fillColor;
			canvas.fill();
		},
		
		/**
		Function for drawing a circle border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			canvas.lineWidth = this.lineWidth;
			canvas.strokeStyle = this.strokeColor;
			canvas.stroke();
		},
		
		/**
		Function for drawing a filled circle with border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			this.drawFinish = this.drawSelections[0];
			this.drawFinish(canvas);
			
			this.drawFinish = this.drawSelections[1];
			this.drawFinish(canvas);
		}
	],
	
	/**
	Function for changing the selected drawing function
	
	@param {number} index* The index of the function in the drawSelection array
	**/
	selectDraw: function (index) {
		"use strict";
		
		this.drawFinish = this.drawSelections[index];
	}
});