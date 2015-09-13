'use strict';
// jshint devel:true

var App = function () {
	var root = this; 

	root.app = $('#app');
	root.app_inner = root.app.find('.app_innerarea');
	root.app_people = root.app.find('.app_person');
	root.app_add = root.app.find('.app_add');

	root.people_amount = root.app_people.length;
	root.size = 0;

	root.new_person_query = '<div class="app_person"></div>';

	root.init();
};


App.prototype.xx = function () {
	var that = this;
	
};

App.prototype.init = function () {
	var that = this;

	that.position_innerarea();
	that.position_people();
	that.init_events();
};


App.prototype.init_events = function () {
	var that = this;

	that.app_add.each(function (i, e) {
		$(e).on('click', function () {
			that.add_person();
		});
	});
	
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
		
		//move person
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

		//create person UI
		var person_logo = $('<span class="app_person_logo"></span>');
		$(e).append(person_logo);

		var contra_angle = 0 - ((360 / that.people_amount) * i);
		var contra_transform = 'translate(-50%, -50%) rotate(' + contra_angle + 'deg)';
		var contra_transform_origin = '50% 50%';

		person_logo.css({
			'webkit-transform': contra_transform,
		  '-moz-transform': contra_transform,
		  '-ms-transform': contra_transform,
		  '-o-transform': contra_transform,
		  'transform': contra_transform,

		  'webkit-transform-origin': contra_transform_origin,
		  '-moz-transform-origin': contra_transform_origin,
		  '-ms-transform-origin': contra_transform_origin,
		  '-o-transform-origin': contra_transform_origin,
		  'transform-origin': contra_transform_origin
		});


	});
};

App.prototype.add_person = function () {
	var that = this;

	//create and add
	var new_person = $(that.new_person_query);
	that.app_inner.append(new_person);
	that.people_amount++;

	//update app
	that.init();
};


var asamblea = new App();