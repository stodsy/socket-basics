var socket = io();

socket.on('connect', function(){
	console.log('connected to socket.io server');


});


socket.on('message', function (message) {
	console.log('New message');
	console.log(message.text);

});

// Handles Submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault.find();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
	

});