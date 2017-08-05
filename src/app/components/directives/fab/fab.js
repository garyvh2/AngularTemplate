(function() {
    'use strict';

    angular
        .module('angular')
        .directive('fab', fabDirective);

    /** @ngInject */
    function fabDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/directives/fab/fab.html',
            scope: {
                creationDate: '='
            },
            controller: FabController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FabController() {
            var vm = this;

        }
    }

})();
