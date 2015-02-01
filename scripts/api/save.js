function saveToApi(history, username, drawingName) {
	"use strict";
	console.log(history);
	console.log(username);
	console.log(drawingName);
	
	var historyJSON = JSON.stringify(history),
		param = {
			"user": username,
			"name": drawingName,
			"content": historyJSON,
			"template": false
		};
	
	$.ajax({
		type:			"POST",
		contentType:	"application/json; charset=utf-8",
		url:			"http://whiteboard.apphb.com/Home/Save",
		data:			param,
		dataType:		"jsonp",
		crossDomain:	true,
		success:		function (data) {
			console.log("SUCCESS!!");
			console.log(data);
		},
		error:			function (xhr, err) {
			console.log("ERROR!!");
			console.log(xhr);
			console.log(err);
		}
	});
}