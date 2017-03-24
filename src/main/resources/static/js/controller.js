app.controller('homeController', function($scope, $http) {
	$scope.headingTitle = "Angular前端微服务例子";
});

app.controller('usersController', function($scope, $http) {
	$scope.headingTitle = "用户列表";
	$scope.action = {
		updateUser : function() {
			alert("update");
		},
		deleteUser : function() {
			alert("delete");
		}
	};
	// 这里调用有两种选择：
	// 1，调用本项目的controller
	// 2，调用网关提供的rest api，前提是网关的服务允许跨域访问（HttpServletResponse.setHeader("Access-Control-Allow-Origin", "*");）
	$http.get('resource/').then(function(response) {
		// 这里是处理正确的回调
		$scope.greeting = response.data;
	}, function(response) {
		// 这里是处理错误的回调
		console.log(response)
	})
});

app.controller('addUserController',function($scope, $http) {
	$scope.headingTitle = "添加用户";
	$scope.formData = {
		username : '',
		age : ''
	};
	$scope.action = {
		addUser : function() {
			alert("add: " + $scope.formData.username + "-"
					+ $scope.formData.age);
		}
	};
});
