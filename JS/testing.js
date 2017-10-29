(function () {

	function assert(value, name) {
		if(value === true) {
			this.color = 'green';
		} else {
			this.color = 'red';
		}

	}

	function test_group('testName',
		function(value, name){})

test_group('test1', assert(){
	
	});


/*--------------------------------------------------------*/
	test_group('WALLA AVARTI',
		function () {
			var tweets = [1,2,3];
			addTweet();

			assert(tweets.length === 4, 'blablabla');
			assert(true, 'blablabla');
			assert(true, 'blablabla');
		});



	function test_group(groupName, assertsFunction) {
		this.panelDiv = document.createElement('div');
		this.panelDiv.classList.add('test-succeed','row', 'panel', 'panel-default', 'col-xs-offset-4', 'col-xs-4');
		var title = document.createElement('h4');
		title.innerHTML = groupName;
		this.panelDiv.appendChild(title);
		var htmlBody = document.getElementsByTagName('body');
		htmlBody[0].appendChild(this.panelDiv);

		console.log(this);

		assertsFunction.bind(this)();
	}

	test_group();

	function Dog(){

	}

	new Dog();

	function assert(testPassed, testName) {
		var testDiv = document.createElement('div');
		testDiv.classList.add('panel', 'panel-default', 'col-xs-offset-3', 'col-xs-6');
		if (testPassed)
			testDiv.classList.add('test', 'panel-success');
		else {
			testDiv.classList.add('test', 'panel-danger');
			this.panelDiv.classList.remove('test-succeed');
			this.panelDiv.classList.add('test-failed');
		}
		var labelEle = document.createElement('label');
		labelEle.innerHTML = testName;
		testDiv.appendChild(labelEle);

		this.panelDiv.appendChild(testDiv);

		return testDiv;
	}






}())
