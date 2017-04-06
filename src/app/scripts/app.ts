// ここはきちんとしたパスを書かないといけない
// typings はもう古いので、reference path は古い。
//// <reference path="../../typings/index.d.ts" />
/// <reference types="jquery" />
/// <reference types="angular" />
/// <reference types="angular-route" />
// npm の @type だと reference types ができる
'use strict';

angular.module('app', ['ngRoute'])
	//ルート情報
	.config(($routeProvider:ng.route.IRouteProvider) => {
			$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl',
					controllerAs: 'main'
				})
				.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'AboutCtrl',
					controllerAs: 'about'
				})
				.otherwise({
					redirectTo: "/"
				});
	});
