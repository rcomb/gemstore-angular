$(function () {
  $('[data-toggle="popover"]').popover()
})

angular.module("myApp", ['gemProducts', 'gravatar']);

angular.module("myApp").controller("myController", ['$scope', '$http', 'Product', 'Avatar', function ($scope, $http, Product, Avatar) {
    Product.all($http).then(function(result){
        $scope.model = result.data;
    })

    $scope.Avatar = Avatar;

    $scope.cart = [];
    
    $scope.initialize = function () {
        console.log("Initialized");
    }
    
    $scope.addProduct = function(product){
        $scope.cart.push(product);
    }
}]);

