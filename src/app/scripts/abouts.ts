/// <reference path="app.ts" />

'use strict';

namespace SampleAngularApp.Controllers {
  export class AboutCtrl {
				/**
				* タイトル。型のまえにスペースが必要。
				*/
				title: string = 'about';

				constructor() {
				}
  	}
}

angular.module('app')
	.controller('AboutCtrl', SampleAngularApp.Controllers.AboutCtrl);
