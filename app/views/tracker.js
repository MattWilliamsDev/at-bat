'use strict';

angular.module( 'QualityABTracker.tracker', [ 'ngRoute', 'QualityABTracker.controllers' ] )

.config([ '$routeProvider', function( $routeProvider ) {
	$routeProvider.when( '/tracker', {
		templateUrl: '/app/templates/tracker.html?' + new Date().getTime()
		, controller: 'trackerCtrl'
	})
}]);