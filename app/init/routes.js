(function(){
   angular.module('app')
    .config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/')
			$stateProvider
         
                 .state('nav', {
				
					template: '<nav-component></nav-component>'
				})
                   .state('cover', {
					url: '/',
					template: '<cover-component></cover-component>'
				})
				.state('home', {
					url: '/home',
					template: '<home-component></home-component>'
				})
				
				.state('skills', {
					url: '/skills',
					template: '<skills-component></skills-component>'
				})
                .state('skills.resume', {
					url: '/skills/resume',
					template: '<resume-component></resume-component>'
				})
                .state('about', {
					url: '/about-nik',
					template: '<about-component></about-component>'
				})
				 .state('gaf', {
					url: '/gaf-news',
					template: '<gaf-component></gaf-component>'
				})
				.state('portfolio', {
					url: '/profile',
					template: '<port-component></port-component>'
				})
				
		})
}())