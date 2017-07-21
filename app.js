'use strict';

(function() {
	var query = document.querySelector.bind(document);
	var queryAll = document.querySelectorAll.bind(document);
	var nodes = getNodes();
	var API_URL = 'https://api.github.com/repositories/36535156/issues';
	var compileTemplate = _.template(nodes.template.innerHTML);

	fetch(API_URL)
		.then(function(res) {
			return res.json();
		})
		.then(function(issues) {
			injectGeneratedIssued({issues: issues});
		})
		.catch(function(err) {
			injectGeneratedIssued({error: err.message});
		});

	function changeListFilter(mode) {
		nodes.nav.setAttribute('data-filter', mode);
		nodes.list.setAttribute('data-filter', mode);
	}

	function injectGeneratedIssued(data) {
		var compiled = compileTemplate(data);
		nodes.issuesContainer.innerHTML = compiled;
		nodes = getNodes();
	}

	function getNodes() {
		return {
			list: query('.js-list'),
			nav: query('.js-nav'),
			showAllTrigger: query('.js-show-all'),
			showOpenTrigger: query('.js-show-open'),
			showClosedTrigger: query('.js-show-closed'),
			template: query('#list_template'),
			issuesContainer: query('.js-issues-container')
		};
	}

	nodes.showAllTrigger.addEventListener('click', changeListFilter.bind(nodes.showAllTrigger, 'all'));
	nodes.showOpenTrigger.addEventListener('click', changeListFilter.bind(nodes.showOpenTrigger, 'open'));
	nodes.showClosedTrigger.addEventListener('click', changeListFilter.bind(nodes.showClosedTrigger, 'closed'));
})();