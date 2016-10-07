(function () {
    'use strict';

    angular
        .module('app', [
            'component.demo',
            'ng.outsideclick'
        ])
        .run(function ($rootScope) {
            $rootScope.config = {
                tabs: [
                    { title: 'Home', template: 'demo/home.html' }
                ]
            };
        })
        .controller('SharedController', SharedController);

    SharedController.$inject = [];
    function SharedController() {
        var vm = this;
        vm.logs = [];

        vm.onOutsideClick = function (section) {
            vm.logs.push('Section ' + section + ': ' + Date.now() + ' : outside clicked!');
        };

    }

})();
