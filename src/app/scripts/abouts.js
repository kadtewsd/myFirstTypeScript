'use strict';
var SampleAngularApp;
(function (SampleAngularApp) {
    var Controllers;
    (function (Controllers) {
        class AboutCtrl {
            constructor() {
                this.titile = 'about';
            }
        }
        Controllers.AboutCtrl = AboutCtrl;
    })(Controllers = SampleAngularApp.Controllers || (SampleAngularApp.Controllers = {}));
})(SampleAngularApp || (SampleAngularApp = {}));
angular.module('app')
    .controller('AboutCtrl', SampleAngularApp.Controllers.AboutCtrl);
//# sourceMappingURL=abouts.js.map