(function () {

	test_group('Index testing',
		function () {
			var firstLength = oldTwitts.length;
			addTwitt('yerac', 'hi...');

			assert(oldTwitts.length === firstLength + 1, 'Check adding tweet');
			assert(true, 'Check publish button');
			assert(true, 'Check links');
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
		// assertsFunction();
		assertsFunction.bind(this)();
	}

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
