(function () {
    'use strict';

    angular
        .module('ng.outsideclick')
        .directive('oursideclick', OutsideclickDirective);

    OutsideclickDirective.$inject = ['$window', '$parse'];
    function OutsideclickDirective($window, $parse) {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            if (!attrs.oursideclick)
                return;

            var htmlElement = element[0];
            var fn = $parse(attrs.oursideclick);

            $window.addEventListener('click', onWindowClick, true);

            scope.$on('$destroy', function (event) {
                $window.removeEventListener('click', onWindowClick);
            });

            function onWindowClick(event) {
                if (htmlElement === event.target || htmlElement.contains(event.target)) {
                    return;
                }

                scope.$apply(fn);
            }

        }
    }

})();