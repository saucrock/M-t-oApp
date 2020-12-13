myApp.controller('HomeController', ["$scope", "$state", function($scope, $state) {
    console.log('This is the home controller');
    $scope.userName = "Hugo";


    $scope.changeNameTo = function() {
        console.log("doing changeName method");
        $scope.userName = "Houdiard";
    }

    $scope.goToPage2 = function() {
        console.log("going to page 2");
        $state.go("page2");

    }


}]);