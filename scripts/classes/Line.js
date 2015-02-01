/**
A single line that can be drawn on a canvas
**/
var Line = Shape.extend({
	
	/**
	Default constructor
	**/
//	constructor: function () {
//		this.base(new Point(0, 0), new Point(0, 0), "black", 1);
//		this.slope = 0;
//		this.yIntercept = 0;
//	},
//	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Lines start point
	@param {Point}	p2* Lines end point
	@param {string}	strokeColor* Lines color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
		this.calcSlope();
		this.calcIntercept();
	},
	
	/**
	Function that acts as an event listener when the mouse is moved on the canvas
	**/
	resize: function (canvas, context, p) {
		"use strict";
		
		this.p2 = p;
		
		this.calcSlope();
		this.calcIntercept();
		
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		this.draw(context);
	},
	
	/**
	Function for altering the location of the line
	
	@param {number} deltaX* Movement on the x-axis
	@param {number} deltaY* Movement on the y-axis
	**/
	move: function (deltaX, deltaY) {
		"use strict";
		
		this.p1.x += deltaX;
		this.p1.y += deltaY;
		
		this.p2.x += deltaX;
		this.p2.y += deltaY;
		
		this.calcIntercept();
	},
	
	/**
	Draw function to draw the line on a canvas
	
	@param {object} canvas* The canvas context to be drawn on.
	**/
	draw: function (context) {
		"use strict";
		
		this.base(context);
		context.moveTo(this.p1.x, this.p1.y);
		context.lineTo(this.p2.x, this.p2.y);
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.strokeColor;
		context.stroke();
	},
	
	/**
	Function for determining if a given point is on the line
	
	@param {Point} p* The given point
	@return {bool} True iff the point is on the line
	**/
	containsPoint: function (p) {
		"use strict";
		
		// if lineWidth is 1 then it is impossible to select the line
		var lineBuffer = this.lineWidth,
		// perpendicular line
			pLine = this.perpendicular(p),
		// point of intercection
			iPoint = this.intersection(pLine);
		
		if (this.lineWidth < 3) {
			lineBuffer *= 2;
		}
		
		// check if the intersect point p is between p1 and p2
		if (this.p1.distTo(this.p2) <
				this.p1.distTo(iPoint) + iPoint.distTo(this.p2)) {
			return false;
		}
		
		if (iPoint.distTo(p) > this.lineWidth) {
			return false;
		}
		
		return true;
	},
	
	/**
	Function for calculating the line slope
	**/
	calcSlope: function () {
		"use strict";
		if (this.p1.y === this.p2.y) {
			this.slope = Infinity;
		} else if (this.p1.x === this.p2.x) {
			this.slope = 0;
		} else {
			this.slope = (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
		}
	},
	
	/**
	Function for calculating the line's y-intercept
	
	@param {Point} p* Point on the line
	**/
	calcIntercept: function (p) {
		"use strict";
		
		if (!(p instanceof Point)) {
			p = this.p1;
		}
		
		if (this.slope === Infinity) {
			this.yIntercept = null;
		} else if (this.slope === 0) {
			this.yIntercept = this.p1.y;
		} else {
			this.yIntercept = p.y - (this.slope * p.x);
		}
	},
	
	/**
	Returns a perpendicular line
	
	@param {Point} p* A point on the canvas
	@return {Line} Line object perpendicular to this one
	**/
	perpendicular: function (p) {
		"use strict";
		
		var result = new Line(new Point(0, 0), new Point(0, 0), "black", 1);
		if (this.slope === Infinity) {
			result.slope = 0;
		} else if (this.slope === 0) {
			result.slope = Infinity;
		} else {
			result.slope = -1 / this.slope;
		}
		
		result.calcIntercept(p);
		result.p1 = p;
		
		return result;
	},
	
	/**
	Function for calculating the point where two lines meet
	
	@param {Line} l* The other line
	@return {object} Returns a Point instance if the lines meet, otherwise {}
	**/
	intersection: function (l) {
		"use strict";
		
		if (this.slope === l.slope) {
			return {};
		}
		
		if (this.slope === Infinity) {
			return new Point(this.p1.x, l.p1.y);
		} else if (this.slope === 0) {
			return new Point(l.p1.x, this.p1.y);
		} else {
			var x = (l.yIntercept - this.yIntercept) / (this.slope - l.slope),
				y = (x * l.slope) + l.yIntercept;
		
			return new Point(x, y);
		}
	}
});