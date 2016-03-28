/* THE VANILLA JS WAY
var myInput = document.getElementById('my-input');

myInput.addEventListener('keyup', function(){
	//console.log('User hit a key.');
	var userText = myInput.value;
	document.getElementById('input-text').innerHTML = userText;
});
*/

/* THE JQUERY WAY
$('#my-input').keyup(function() {
	$('#input-text').html($('#my-input').val());
});
*/

