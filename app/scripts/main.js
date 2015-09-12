'use strict';
// jshint devel:true

var App = function () {
	var root = this; 

	root.app = $('#app');
	root.app_inner = root.app.find('.app_innerarea');
	root.app_people = root.app.find('.app_person');

	root.people_amount = root.app_people.length;
	root.size = 0;

	root.init = (function () {

		root.position_innerarea();
		root.position_people();

	})();	
};


App.prototype.xx = function () {
	var that = this;
	
};

App.prototype.position_innerarea = function () {
	var that = this;

	//position in height and width
	var size = (that.app.innerWidth() >= that.app.innerHeight()) ? that.app.innerHeight() : that.app.innerWidth();
	that.size = size - 40;

	that.app_inner.css({
		'width': that.size + 'px', 
		'height': that.size + 'px'
	});
};

App.prototype.position_people = function () {
	var that = this;

	that.app_people.each(function (i, e) {
		
		var translate = that.size / 2;
		var angle = (360 / that.people_amount) * i;
		var transform = 'translate(-50%, calc(-50% - ' + translate + 'px)) rotate(' + angle + 'deg)';
		var transform_origin = '50% calc(50% + ' + translate + 'px)';

		$(e).css({
			'webkit-transform': transform,
		  '-moz-transform': transform,
		  '-ms-transform': transform,
		  '-o-transform': transform,
		  'transform': transform,

		  'webkit-transform-origin': transform_origin,
		  '-moz-transform-origin': transform_origin,
		  '-ms-transform-origin': transform_origin,
		  '-o-transform-origin': transform_origin,
		  'transform-origin': transform_origin
		});
	});
};

App.prototype.add = function () {

};


var asamblea = new App();