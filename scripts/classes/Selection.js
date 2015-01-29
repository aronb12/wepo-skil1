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
	changeLineColor: function (color) {
		"use strict";
		
		this.lineColor = color;
		this.item.lineColor = color;
	},
	changeLineWidth: function (num) {
		"use strict";
		
		this.lineWidth = num;
		this.item.lineWidth = num;
	},
	changeFillColor: function (color) {
		"use strict";
		
		this.fillColor = color;
		
		if (this.item instanceof Rectangle ||
				this.item instanceof Circle) {
			this.item.fillColor = color;
		}
	},
	changeFont: function (font) {
		"use strict";
		
		this.font = font;
//		if (this.item instanceof Text) {
//			this.item.font = font;
//		}
	},
	changeFontSize: function (fontSize) {
		"use strict";
		
		this.fontSize = fontSize;
//		if (this.item instanceof Text) {
//			this.item.fontSize = fontSize;
//		}
	}
	
});