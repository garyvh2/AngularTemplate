(function() {
    angular
        .module('angular')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/modules/main/main.view.html',
                controller: 'MainController',
                controllerAs: 'vm'
            });
        $urlRouterProvider.otherwise('/');
    }
})();
