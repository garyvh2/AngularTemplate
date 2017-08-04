(function() {
    angular
        .module('angular')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/modules/main/main.view.html',
                controller: 'MainController',
                controllerAs: 'vm'
            });
        $urlRouterProvider.otherwise('/');
    }
})();
