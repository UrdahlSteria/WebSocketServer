"use strict";

document.write("Display message to the user");

$(function () {
	function log(msg) {
		$('#log').append('<li>' + msg + '<li>');
	}
	
	var webSocket = window.WebSocket || window.MozWebSocket;
	var ws = new webSocket('ws://localhost:8181/');
	
	log('Attempting to connect to server...');
	
	ws.onopen = function() {
		log('Connection opened.');
	};
	
	ws.onclose = function() {
		log('Connection closed.');
	};
	
	ws.onmessage = function(e){
		log('Server says: ' + e.data);
	};
	
	ws.onerror = function (e) {
		og('Error ' + e);
	};
	
	$('#messageBox').change(function () {
		ws.send(this.value);
	});
	
});