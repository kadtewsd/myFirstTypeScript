/// <reference path="../app.ts" />

'use strict';

namespace SampleAngularApp.Controllers {
  export class AboutCtrl {
	/**
	* タイトル
	*/
	titile:string = 'about';

	constructor() {
	}
  }
}

angular.module('app')
	.controller('AboutCtrl', SampleAngularApp.Controllers.AboutCtrl);
