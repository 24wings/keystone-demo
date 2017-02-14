angular.module('myApp.directives', [])
    .directive('MyHtml', function() {

        return {
            resrict: 'A',
            link: function(scope, element, attrs) {
                console.log(attrs);

            }
        };
    });