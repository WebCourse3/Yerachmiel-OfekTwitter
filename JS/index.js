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

oldTwitts =
	[
		{username: 'Bobo', text: 'hello followers!'},
		{username: 'Elvis', text: 'this exercise is really easy!'},
		{username: 'Mimi', text: 'I want to go to sleep'}
	];

function addTwitt(tName, twittText) {
	var twittObg;
	var tUserName;
	var divImage;
	var tImage;

	twittObg = document.createElement('div');
	twittObg.className = 'tweet';
	document.getElementById('section').appendChild(twittObg);

	divImage = document.createElement('div');
	divImage.className = 'tweeter-avatar';
	twittObg.appendChild(divImage);

	tImage = document.createElement('img');
	tImage.className = 'avatar';
	tImage.setAttribute('src', '../images/avatar.png');
	divImage.appendChild(tImage);

	tUserName = document.createElement('div');
	tUserName.className = 'tweeter-username';
	tUserName.innerHTML = tName;
	twittObg.appendChild(tUserName);

	tText = document.createElement('div');
	tText.className = 'tweet-text';
	tText.innerHTML = twittText;
	twittObg.appendChild(tText);

	document.getElementById('win-twitt').value = null;
}

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






