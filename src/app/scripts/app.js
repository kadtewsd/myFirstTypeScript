'use strict';
angular.module('app', ['ngRoute'])
    .config(($routeProvider) => {
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
//# sourceMappingURL=app.js.map