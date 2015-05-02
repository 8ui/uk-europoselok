var UK = angular.module('UKApp', ['uiGmapgoogle-maps']);

UK.controller('main', ['$scope', function($scope){
	
	$scope.templates = {
		services: {
			name: "Услуги",
			url: "templates/services.html"
		},
		contacts: {
			name: "Контакты",
			url: "templates/contacts.html"
		},
	};

	$scope.map = { 
		center: { 
			latitude: 55.812838, 
			longitude: 52.540087 
		}, 
		options: {
			scrollwheel: false
		},
		zoom: 12 
	};

	$scope.marker = { coords: { latitude: 55.812838, longitude: 52.540087 }, id: 0 };

}])