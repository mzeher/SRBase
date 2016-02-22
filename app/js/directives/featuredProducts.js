four51.app.directive('featuredproducts', function() {
    var obj = {
        restrict: "E",
        templateUrl:'partials/controls/featuredProducts.html',
        controller: 'FeaturedProductsCtrl'
    };

    return obj;
});