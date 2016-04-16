angular.module('app.routes',[])
	.config(function($stateProvider,$urlRouteProvider){
		$stateProvider
		.state('menu',{
			url:'/menu',
			templateUrl:'templates/menu.mtl'
		})
		.state('menu.page',{
			url:'/index',
			view:{
				'side-menu':{
					templateUrl: 'templates/page.html',
					controller: 'pageCtrl'
				}
			}
		})
	$urlRouteProvider.otherwise('#/menu]/index');
});
