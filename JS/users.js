window.onload = function () {

	loadUsers();
};

usrUnfollow =
	[
		{imgSrc: "../images/avatar.png", userName: "User1"},
		{imgSrc: "../images/avatar.png", userName: "User2"},
		{imgSrc: "../images/avatar.png", userName: "User3"},
		{imgSrc: "../images/avatar.png", userName: "User4"},
		{imgSrc: "../images/avatar.png", userName: "User5"}
	];

usrFollow =
	[
	];

function loadUsers() {
	usrUnfollow.forEach(function (element) {
		addUser(element.imgSrc, element.userName, "usrUnfollow");
		addUser(element.imgSrc, element.userName, "usrFollow");
	});
}

function addUser(imgSrc, userName, list) {
	var userSection;
	var userObg;
	var obgClass = "user col-xs-6 col-md-4";
	var imgObg;
	var nameObg;
	var btnObg;
	var followBtn = "<input type=\"button\" value=\"follow\">";

	userSection = document.getElementById(users-section);

	userObg = document.createElement('div');
	userObg.className = obgClass;
	userSection.appendChild(userObg);

	imgObg = document.createElement('img');
	imgObg.setAttribute('src', imgSrc);
	userObg.appendChild(imgObg);

	nameObg = document.createElement('label');
	nameObg.innerHTML(userName);
	userObg.appendChild(nameObg);

	btnObg = document.createElement('input');
	btnObg.setAttribute('type', 'button');
	btnObg.setAttribute('value', 'follow');
	userObg.appendChild(btnObg);
}

function follwUnfollwClick() {

}

function follow() {

}

function unfollow() {

}