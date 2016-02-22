four51.app.filter('hcintervalFilter', hcintervalFilter);
four51.app.filter('hccarouselFilter', hccarouselFilter);

four51.app.controller('HomeCarouselCtrl', ['$scope', '$animate', '$filter', 'User',
    function ($scope, $animate,$filter, User) {
        $animate.enabled(false);
        $scope.slides = [];
        $scope.$watch('user.CustomFields', function(newVal){
            if (!newVal) return;
            $scope.slides = []; //reset the slide counter
            $scope.myInterval = ($filter('hcintervalFilter')($scope.user.CustomFields, 'homeCarouselInterval') * 1000) || 5000;
            $scope.slides = $scope.slides.concat($filter('hccarouselFilter')($scope.user.CustomFields, 'homeCarouselImage'));
            //$scope.slides[0].active = true;
        });
    }]);

function hcintervalFilter() {
    return function (fields, name) {
        var result = null;
        angular.forEach(fields, function(field) {
            if(field.Name.toUpperCase().indexOf(name.toUpperCase()) > -1)
                result = field.DefaultValue;
        });
        return result;
    }
}
function hccarouselFilter() {
    return function (fields, name) {
        var result = [];
        angular.forEach(fields, function(field) {
            if(field.Name.toUpperCase().indexOf(name.toUpperCase()) > -1){
                var slide = {
                    text: field.UploadInstructions,
                    image: field.File.Url,
                    link: field.Label
                };
                if (slide.link.toUpperCase().indexOf('NONE') > -1) {
                    slide.link = null;
                }
                result.push(slide);
            }
        });
        return result;
    }
}