var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id',{
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
});

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		id:'1',

	},

	{
		name: 'Indian Accent - The Manor',
		address: 'The Manor, 77, Friends Colony, New Delhi',
		location: ' New Delhi',
		category: 'Casual Dining, Bar',
		vote: '4.9',
		cuisines: 'Modern Indian',
		cost: '3000',
			hours: 'Today  12 Noon to 2:30 PM, 7 PM to 10:45 PM',
			image: 'https://s3-media3.fl.yelpcdn.com/bphoto/BOn5orF1EF8uYhTeLQpjww/ls.jpg',
		id: '2',

	},
	{
								name: 'Dastaan',
								address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
								location: 'Chandigarh',
								category: 'Casual Dining',
								vote: '4.0',
								cuisines: 'North Indian',
								cost: '2200',
									id: 3,
								hours: '11 AM to 11 PM (Mon-Sun)',

								image: 'http://www.espncricinfo.com/db/PICTURES/CMS/123300/123365.2.jpg'
				},
				{
								name: 'Chokhi Dhani',
								address: 'Amravati Enclave, Near Chandi Mandir, Panchkula',
								location: 'Chandigarh',
								category: 'Casual Dining',
								vote: '3.8',
								cuisines: 'Rajasthani',
								cost: '1200',
									id: 3,
								hours: '5:30 PM to 11 PM (Mon-Sun)',
								image: 'http://www.chokhidhani.com/blog/wp-content/uploads/2016/08/chokhi-dhani-resort-800x445.jpg'
				},
				{
								name: 'Cafe Lota',
								address: 'National Crafts Museum, Gate 2, Bhairon Marg, Pragati Maidan',
								location: 'Delhi',
								category: 'Casual Dining',
								vote: '4.5',
								cuisines: 'North Indian, South Indian, Bihari',
								cost: '1200',
									id: 5,
								hours: 'Closed (Mon),8 AM to 10 PM (Tue-Sun)',
								image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/ab/4e/65/cafe-lota.jpg'
				},
				{
								name: 'Raj Eatery',
								address: 'Student Centre, Punjab University, Sector 14, Chandigarh',
								location: ' Chandigarh',
								category: 'QUICK BITES',
								vote: '3.2',
								cuisines: 'North Indian',
								cost: '200',
									id: 6,
								hours: '9 AM to 9:30 PM (Mon-Sun)',
								image: 'http://www.10deals.in/uploads/images/thumbnails/c4be58bb2cabe998096ab415a26e6548.jpg'
				},
				{
								name: 'Turning Point',
								address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
								location: 'Delhi Cantt',
								category: 'Casual Dining',
								vote: '3.5',
								cuisines: 'North Indian, Chinese, Mughlai',
								cost: '700',
									id: 7,
								hours: '10 AM to 11 PM (Mon-Sun)',
								image: 'https://s3-media2.fl.yelpcdn.com/bphoto/gzcOhu7Nf2xXnPQpGrfS0g/180s.jpg'
				}

			];
})

foodieApp.controller('loginController',function($scope,$location) {

	$scope.goToHome = function() {
		console.log($location.url('home'));
		$location.url('home');
	}

})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		id:'1',
		bestDish: {
			name: 'Pastry cake',
			image: 'https://beingbhookad.files.wordpress.com/2013/10/img_4840.jpg'
		}
	},

	{
		name: 'Indian Accent - The Manor',
		address: 'The Manor, 77, Friends Colony, New Delhi',
		location: ' New Delhi',
		category: 'Casual Dining, Bar',
		vote: '4.9',
		cuisines: 'Modern Indian',
		cost: '3000',
			hours: 'Today  12 Noon to 2:30 PM, 7 PM to 10:45 PM',
			image: 'https://s3-media3.fl.yelpcdn.com/bphoto/BOn5orF1EF8uYhTeLQpjww/ls.jpg',
		id: '2',
		bestDish: {
			name: 'chow mein noodles',
			image: 'http://www.asvicookingclasses.com/images/chowmine.jpg'
		},

	},
	{
								name: 'Dastaan',
								address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
								location: 'Chandigarh',
								category: 'Casual Dining',
								vote: '4.0',
								cuisines: 'North Indian',
								cost: '2200',
									id: 3,
								hours: '11 AM to 11 PM (Mon-Sun)',

								image: 'http://www.espncricinfo.com/db/PICTURES/CMS/123300/123365.2.jpg'
				},
				{
								name: 'Chokhi Dhani',
								address: 'Amravati Enclave, Near Chandi Mandir, Panchkula',
								location: 'Chandigarh',
								category: 'Casual Dining',
								vote: '3.8',
								cuisines: 'Rajasthani',
								cost: '1200',
									id: 4,
								hours: '5:30 PM to 11 PM (Mon-Sun)',
								image: 'http://www.chokhidhani.com/blog/wp-content/uploads/2016/08/chokhi-dhani-resort-800x445.jpg'
				},
				{
								name: 'Cafe Lota',
								address: 'National Crafts Museum, Gate 2, Bhairon Marg, Pragati Maidan',
								location: 'Delhi',
								category: 'Casual Dining',
								vote: '4.5',
								cuisines: 'North Indian, South Indian, Bihari',
								cost: '1200',
									id: 5,
									bestDish: {
										name: 'Strawberry-Shake',
										image: 'http://www.esutta.com/wp-content/uploads/2016/02/Strawberry-milkshake.jpg'
									},
								hours: 'Closed (Mon),8 AM to 10 PM (Tue-Sun)',
								image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/ab/4e/65/cafe-lota.jpg'
				},
				{
								name: 'Raj Eatery',
								address: 'Student Centre, Punjab University, Sector 14, Chandigarh',
								location: ' Chandigarh',
								category: 'QUICK BITES',
								vote: '3.2',
								cuisines: 'North Indian',
								cost: '200',
									id: 6,
								hours: '9 AM to 9:30 PM (Mon-Sun)',
								image: 'http://www.10deals.in/uploads/images/thumbnails/c4be58bb2cabe998096ab415a26e6548.jpg'
				},
				{
								name: 'Turning Point',
								address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
								location: 'Delhi Cantt',
								category: 'Casual Dining',
								vote: '3.5',
								cuisines: 'North Indian, Chinese, Mughlai',
								cost: '700',
									id: 7,
								hours: '10 AM to 11 PM (Mon-Sun)',
								image: 'https://s3-media2.fl.yelpcdn.com/bphoto/gzcOhu7Nf2xXnPQpGrfS0g/180s.jpg'
				}

			];
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key c8999986d618409aa8e9160577d17bd0',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				console.log(response);
				var ingredients = response.data.outputs[0].data.concepts;
	  			for (var i =0;i<ingredients.length;i++) {
	  				$scope.ingredients.push(ingredients[i].name);
	  				$scope.probabilityvalue.push(ingredients[i].value);
	  			}


	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.ingredients = [];
		$scope.probabilityvalue=[];

		$scope.checkVegorNonVeg = function() {
			var flag_quit =0;
			ing_list = angular.copy($scope.ingredients); //hard copy
			prob_value= $scope.probabilityvalue;
			var elements = prob_value.filter(function(a){return a > 0.85;});
			ing_list.splice(elements.length,20);
			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];
			var additionnonveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' class='vegnonveg' ></div>"
			var additionveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/veg-300x259.jpg' class='vegnonveg' ></div>"

			for(j=0;j<ing_list.length;j++){
				for(i=0;i<nonveg.length;i++){
					if(ing_list[j] == nonveg[i]){
						flag_quit=1;
						break;
					}
				}
			if(flag_quit==1){
				$(".rest-extra").append(additionnonveg);
				break;
			}

		}
		if(flag_quit==0){$(".rest-extra").append(additionveg);}
	}

});
