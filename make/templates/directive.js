app.directive('<%= name %>', function ($log) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'URL_TO_TEMPLATE',
        scope: {
            ngModel: '='
        },
        link: function (scope, elem, attrs) {


        }
    };
});