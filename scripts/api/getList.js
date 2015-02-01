function getList(username) {
	"use strict";
	var result = []
	return $.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "http://whiteboard.apphb.com/Home/GetList",
		data: {"user": username, "template": true},
		dataType: "jsonp",
		crossDomain: true,
		success: function (data) {
//			console.log(data);
			var i;
			for (i = 0; i < data.length; i += 1) {
				result.append({
					id: i,
					history: JSON.parse(data.WhiteboardContents)
				});
			}
			return result;
		},
		error: function (xhr, err) {
			console.log("ERROR!!");
			console.log(xhr);
			console.log(err);
		}
	});
}

//$.ajax({
//	type: "POST",
//	contentType: "application/json; charset=utf-8",
//	url: "http://whiteboard.apphb.com/Home/GetList",
//	data: {"user": "arona12", "template": true},
//	dataType: "jsonp",
//	crossDomain: true,
//	success: function (data) {
//		console.log("SUCCESS!!");
//		console.log(data);
//	},
//	error: function (xhr, err) {
//		console.log("ERROR!!");
//		console.log(xhr);
//		console.log(err);
//	}
//});