/**
Selection class for determining what object should be drawn
on the canvas and with what values.
**/

var Selection = Base.extend({
	
	/**
	Default constructor
	**/
	constructor: function () {
		"use strict";
		
		this.createObject = function () {};
	},
	
	/**
	The item to be drawn on the canvas
	**/
	item: {},
	lineColor: "",
	lineWidth: 0,
	fillColor: "",
	font: "",
	fontSize: 0,
	
	opIndex: 0,
	operations: [
		function () {
			"use strict";
		},
		function () {
			"use strict";

			this.item = this.createRect();
			this.item.selectDraw(0);
		},
		function () {
			"use strict";

			this.item = this.createRect();
			this.item.selectDraw(1);
		},
		function () {
			"use strict";

			this.item = this.createRect();
			this.item.selectDraw(2);
		},
		function () {
			"use strict";

			this.item = this.createCirc();
			this.item.selectDraw(0);
		},
		function () {
			"use strict";

			this.item = this.createCirc();
			this.item.selectDraw(1);
		},
		function () {
			"use strict";

			this.item = this.createCirc();
			this.item.selectDraw(2);
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
		
//		this.opIndex = index;
		this.createShape = this.operations[index];
	},
	
	/**
	Function for creating a rectangle using the class variables
	**/
	createRect: function () {
		"use strict";
		
		return new Rectangle(new Point(0, 0),
								  new Point(0, 0),
								  this.lineColor,
								  this.lineWidth,
								  this.fillColor);
	},
	
	/**
	Function for creating a circle using the class variables
	**/
	createCirc: function () {
		"use strict";
		
		return new Circle(new Point(0, 0),
								  new Point(0, 0),
								  this.lineColor,
								  this.lineWidth,
								  this.fillColor);
	}
	
});