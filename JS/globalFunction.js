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