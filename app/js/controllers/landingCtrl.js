four51.app.controller('LandingCtrl', ['$routeParams', '$sce', '$scope', '$451', 'Category', 'Product', 'Nav',
    function ($routeParams, $sce, $scope, $451, Category, Product, Nav) {
        if($scope.tree){
            $scope.currentCategory ={SubCategories:$scope.tree};
        }

    }]);