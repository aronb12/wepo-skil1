function getList(username) {
	"use strict";
//	console.log(username);
//	$("#drawings").append("<option id='1'>" + username + "</option>");
	
	
	return $.ajax({
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
//			var i;
//			for (i = 0; i < data.length; i += 1) {
//				result.append({
//					id: i,
//					history: JSON.parse(data.WhiteboardContents)
//				});
//			}
//			return result;
		},
		error: function (xhr, err) {
			console.log("ERROR!!");
			console.log(xhr);
			console.log(err);
		}
	});
}