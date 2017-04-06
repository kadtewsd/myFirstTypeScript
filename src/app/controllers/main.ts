/// <reference path="../app.ts" />
// スラッシュは三つ

'use strict'
namespace SampleAngularApp.Controllers {
  export class MainCtrl {
		/**
		* タイトル
		*/
		title: string = 'main';
	
		/**
		* Get リクエストでうけとる JSON オブジェクト
		*/
		values: Array<string>;
	
		constructor(private $http: ng.IHttpService) {
		  this.awake();
		}
		
		/**
		* 呼び出し時の処理
	   */
	   private awake() {
		 //GET
		 this.$http.get('api/values')
		 	// success は古いらしい。http://www.codelord.net/2015/05/25/dont-use-%24https-success/
		 	//.success(
			.then(
				(data:Array<string>) => this.values = data);
	   }
    }
}
angular.module('app')
	.controller('MainCtrl', SampleAngularApp.Controllers.MainCtrl);

//　$httpサービスは、このXHRオブジェクトのラッパーです。$httpサービスを利用することで、XHRオブジェクトでは冗長になりがちだった通信の手続きを、よりシンプルに記述できるようになります。
