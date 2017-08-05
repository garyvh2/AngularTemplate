(function() {
    angular
        .module('angular')
        .config(appConfig);

    function appConfig($mdThemingProvider, $logProvider, toastrConfig) {
        //Material design modify theme
        $mdThemingProvider
            .theme('default')
            .primaryPalette('teal')
            .accentPalette('red')
            .warnPalette('green')
            .backgroundPalette('grey');

        $mdThemingProvider.alwaysWatchTheme(true);
        //Enable log
        $logProvider.debugEnabled(true);

        //Configure toast
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
    }
})();
