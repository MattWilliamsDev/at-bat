'use strict';

angular.module( 'QualityABTracker.tracker', [ 'ngRoute', 'QualityABTracker.controllers' ] )

.config([ '$routeProvider', function( $routeProvider ) {
	$routeProvider

	.when( '/tracker', {
		templateUrl: '/app/templates/tracker.html'
		, controller: 'trackerCtrl'
	})
	.when( '/tracker/:player', {
		templateUrl: '/app/templates/tracker.html'
		, controller: 'trackerCtrl'
	})
}]);