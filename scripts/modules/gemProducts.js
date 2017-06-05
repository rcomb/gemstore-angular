angular.module("gemProducts", []); //This line defines the new directive


angular.module("gemProducts").factory("Product", function ProductFactory(){
    return {
        all : function($http){
            return $http.get("data/products.json");
        },

        one : function(name, $http){

        }
    }
})


//Using angular.module with one parameter will "fetch" the defined module from the angular runtime, and you can add new directives/controllers to it
//This will be converted to snake case: gem-write-review
angular.module("gemProducts").directive("gemWriteReview", function(){
    return {
        restrict: 'A',
        templateUrl: 'templates/gem-write-review.html',
        controller: function($scope, $http) {
            $scope.review = {};

            $scope.addReview = function(product){
                if(!product.reviews){
                    product.reviews = [];
                }

                product.reviews.push($scope.review);
                //TODO: send this review to our API so it can be saved server-side.
                $scope.review.productid = product.productid;
                $http.post('/api/review', $scope.review)

                $scope.review = {};
                $scope.reviewForm.body.$setPristine();
                $scope.reviewForm.author.$setPristine();
                $scope.reviewForm.stars.$setPristine();
            }

            $scope.validate = function(){
                //Touching each of the inputs in the current form to set them to dirty
                //If they've been left blank, this will cause the has-error class to be applied
                $scope.reviewForm.body.$setDirty();
                $scope.reviewForm.author.$setDirty();
                $scope.reviewForm.stars.$setDirty();
                return $scope.reviewForm.$valid;
            }
        }

    }
})

angular.module("gemProducts").directive("gemPanels", function(){
    return {
        restrict: 'A',
        templateUrl: 'templates/gem-panels.html',
        controller: function($scope){
            $scope.tab = 1;

            $scope.selectTab = function(tab){
                $scope.tab = tab;
                //console.log("Tab changed to " + tab + " on " + $scope.$parent.product.name);
            }

            $scope.isSelected = function(tab){
                return $scope.tab === tab;
            }
        }
    }

})
