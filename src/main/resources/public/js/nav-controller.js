angular.module('navController', [])
	.controller('nav', function($scope, $state) {
		$scope.title = 'Gerenciador de Pautas';

		// returns true if the current router url matches the passed in url
		// so views can set 'active' on links easily
		$scope.isUrl = function(url) {
			if (url === '#') return false;
			return ('#' + $state.$current.url.source + '/').indexOf(url + '/') === 0;
		};

		$scope.pages = [
			{
				name: 'Home',
				url: '#/'
			},
			{
				name: 'Pautas',
				url: '#/pautas'
			},
			{
				name: 'Reunioes',
				url: '#/reunioes'
			},
			{
				name: 'Atas',
				url: '#/atas'
			},
			{
				name: 'Itens',
				url: '#/itens'
			},
			{
				name: 'Participantes',
				url: '#/participantes'
			},
			{
				name: 'Arquivos',
				url: '#/arquivos'
			}
		]
	});
