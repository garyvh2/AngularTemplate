(function() {
    'use strict';

    angular
        .module('angular')
        .directive('toolbar', toolBarDirective);

    /** @ngInject */
    function toolBarDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/directives/toolbar/toolbar.html',
            scope: {
                creationDate: '='
            },
            controller: ToolbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function ToolbarController($mdDialog, $mdSidenav, SweetAlert) {
            var vm = this;

            vm.icons = ['user', 'wrench', 'times'];
            //Configuration items function
            vm.itemClick = function(index) {
                SweetAlert.swal(
                    'Good job!',
                    'You clicked the button with index' + index + '!',
                    'success'
                )
            };

            //SideNAv
            vm.toggleLeft = buildToggler('left');
            vm.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
                return function() {
                    $mdSidenav(componentId).toggle();
                };
            }


        }
    }

})();
