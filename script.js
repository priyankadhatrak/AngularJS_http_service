var testApp = angular.module("testApp", []);
testApp.controller("testController", ['$scope',
'$http',function ($scope, $http) {
    $scope.send = true;
    $scope.editData = false;
    $scope.deleteData = false;
    $scope.userid = true;

   
        $http.get("http://localhost:3000/records").then(
            function successCallback(response) {
                $scope.data = response.data;
                console.log("response", response.data);
            },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );
   

     $scope.postdata = function (name, city, country) {
    $http.post('http://localhost:3000/records/', $scope.user, function successCallback(response) {
        $scope.data.push(data);
        alert("User has created Successfully");
        }, function errorCallback(response) {  
        alert("Error. while created user Try Again!");
        });
    }
    // Update function
    $scope.editData = function(user) {

        $scope.user = user;
        $scope.send = false;
        $scope.update = true;
        $scope.userid = false;
    
      };
        $scope.updateData = function() {
        $http.put('http://localhost:3000/records/' + $scope.user.id, $scope.user, function successCallback(response) {
            alert("User has updated Successfully")
            }, function errorCallback(response) { 
            alert("Error. while updating user Try Again!");
            });
        }
    // Delete function
    $scope.deleteData =function(user){
        $http.delete('http://localhost:3000/records/'+ user.id, function successCallback(response) {
            alert("User has deleted Successfully");
                var index = $scope.data.indexOf(user);
                $scope.data.splice(index, 1);
                console.log(data);
                $scope.data.push(data);
                }, function errorCallback(response) {
                alert("Error. while deleting user Try Again!");
                });   
};
}
]);