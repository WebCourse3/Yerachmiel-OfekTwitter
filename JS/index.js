/*window.alert(5 + 6);
document.getElementById("win-twitt");
document.write("test");
document.write(5 + 7);
document.createElement("");
debugger;*/

window.onload = function () {
	document.getElementById('twitt-btn').addEventListener('click', newTwitt);
	loadTwitts(oldTwitts);
};

function loadTwitts(tArcive) {
	tArcive.forEach(function (element) {
		addTwitt(element.username, element.text);
	});
}

function newTwitt() {
	var twittText = document.getElementById('win-twitt').value;
	var userName = 'Yerach Rivkin';
	addTwitt(userName, twittText);
	oldTwitts.push({username: userName, text: twittText});
}






