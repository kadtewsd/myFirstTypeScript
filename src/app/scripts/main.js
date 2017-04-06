'use strict';
var SampleAngularApp;
(function (SampleAngularApp) {
    var Controllers;
    (function (Controllers) {
        class MainCtrl {
            constructor($http) {
                this.$http = $http;
                this.title = 'main';
                this.awake();
            }
            awake() {
                this.$http.get('api/values')
                    .then((data) => this.values = data);
            }
        }
        Controllers.MainCtrl = MainCtrl;
    })(Controllers = SampleAngularApp.Controllers || (SampleAngularApp.Controllers = {}));
})(SampleAngularApp || (SampleAngularApp = {}));
angular.module('app')
    .controller('MainCtrl', SampleAngularApp.Controllers.MainCtrl);
//# sourceMappingURL=main.js.map