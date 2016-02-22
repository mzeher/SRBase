four51.app.directive('homecarousel', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/controls/home-carousel.html',
        controller: 'HomeCarouselCtrl'
    };
    return obj;
});