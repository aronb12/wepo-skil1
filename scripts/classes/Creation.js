/**
Creation class for determining what object should be drawn
on the canvas and with what values.
**/
var Creation = Base.extend({
	
	/**
	Default constructor
	**/
	constructor: function () {
		"use strict";
	
		/**
		The item to be drawn on the canvas
		**/
		this.item = {};
		this.lineColor = "black";
		this.lineWidth = 1;
		this.fillColor = "black";
		this.font = "";
		this.fontSize = 0;

		this.createShape = function (p) {};
	},
	operations: [
		function (p) {
			"use strict";
			
			this.item = this.createLine(p);
		},
		function (p) {
			"use strict";

			this.item = this.createRect(p);
			this.item.selectDraw(0);
		},
		function (p) {
			"use strict";

			this.item = this.createRect(p);
			this.item.selectDraw(1);
		},
		function (p) {
			"use strict";

			this.item = this.createRect(p);
			this.item.selectDraw(2);
		},
		function (p) {
			"use strict";

			this.item = this.createCirc(p);
			this.item.selectDraw(0);
		},
		function (p) {
			"use strict";

			this.item = this.createCirc(p);
			this.item.selectDraw(1);
		},
		function (p) {
			"use strict";

			this.item = this.createCirc(p);
			this.item.selectDraw(2);
		},
		function (p) {
			"use strict";
			
			this.item = this.createPen(p);
		}
	],
	setLineColor: function (color) {
		"use strict";
		
		this.lineColor = color;
		this.item.lineColor = color;
	},
	setLineWidth: function (num) {
		"use strict";
		
		this.lineWidth = num;
		this.item.lineWidth = num;
	},
	setFillColor: function (color) {
		"use strict";
		
		this.fillColor = color;
		
		if (this.item instanceof Rectangle ||
				this.item instanceof Circle) {
			this.item.fillColor = color;
		}
	},
	setFont: function (font) {
		"use strict";
		
		this.font = font;
//		if (this.item instanceof Text) {
//			this.item.font = font;
//		}
	},
	setFontSize: function (fontSize) {
		"use strict";
		
		this.fontSize = fontSize;
//		if (this.item instanceof Text) {
//			this.item.fontSize = fontSize;
//		}
	},
	selectOperation: function (index) {
		"use strict";
		
		this.createShape = this.operations[index];
	},
	
	/**
	Function for creating a rectangle using the class variables
	
	@return {Rectangle} New rectangle object
	**/
	createRect: function (p) {
		"use strict";
		
		return new Rectangle(p, p, this.lineColor, this.lineWidth, this.fillColor);
	},
	
	/**
	Function for creating a circle using the class variables
	
	@return {Circle} New circle object
	**/
	createCirc: function (p) {
		"use strict";
		
		return new Circle(p, p, this.lineColor, this.lineWidth, this.fillColor);
	},
	
	/**
	Function for creating a line
	
	@return {Line} New line object
	**/
	createLine: function (p) {
		"use strict";
		
		return new Line(p, p, this.lineColor, this.lineWidth);
	},
	
	/**
	Function for creating a pen object
	
	@return {object} New Pen object
	**/
	createPen: function (p) {
		"use strict";
		
		return new Pen(p, this.lineColor, this.lineWidth);
	}
});