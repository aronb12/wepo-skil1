function getList(username) {
	"use strict";
	
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "http://whiteboard.apphb.com/Home/GetList",
		data: {"user": username, "template": false},
		dataType: "jsonp",
		crossDomain: true,
		success: function (data) {
			var i;
			for (i = 0; i < data.length; i += 1) {
				$("#drawings").append("<option value=" +
									  data[i].ID + ">" +
									  data[i].WhiteboardTitle +
									  "</option>");
			}
		},
		error: function (xhr, err) {
			console.log("ERROR!!");
			console.log(xhr);
			console.log(err);
		}
	});
}