four51.app.controller('FeaturedProductsCtrl', ['$scope', 'Product',
    function ($scope, Product) {
        //holder for product objects
        $scope.featProducts = [];

        //list of up to 4 featured items.
        $scope.featuredList = [
            "863E9777-E2BF-49AF-BA75-625EF88FD49B",
            "923A6E74-3ED3-4B3A-A6FB-08C87E44820D",
            "6F699E39-5EB3-4128-BE39-4EB436465052",
            "21CF869D-6546-4E5A-B6CA-05F2E35CBE0B"
        ];

        //loop through each featured item and use the Product service to return the needed object
        angular.forEach($scope.featuredList, function(f){
            Product.get(f, function(data){
                $scope.featProducts.push(data);
            });
        });
    }]);