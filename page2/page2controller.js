myApp.controller('Page2Controller', ["$scope", "$state", "$http", function($scope, $state, $http) {
    console.log('This the page 2 Controller');
    $scope.goToHome = function() {
        console.log('going to Home');
        $state.go('home');
    }

    $scope.getLondonTemp = function() {
        console.log("asking for London temperature");
        var the = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=05806546078a774ef25d7971e2f037be";
        $http({
            method : "GET",
            url: the

        }).then(function mySuccess(response) {
            alert("coucou");
            console.log(response.data)
            $scope.londonTemperature = response.data.main.temp + " K";
        }, function myError(response) {
            alert("error");
        });
       
    }
}])