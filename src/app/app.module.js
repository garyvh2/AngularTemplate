(function() {
    angular
        .module('angular', ['ngRoute',      //URL Access Methods (Adds $route, $routeProvider, $routeParams)
                'ngAria',                   //Accessibility For Web Applicst
                'ngSanitize',               //ngSanitize renders html through directive ng-bind-html
                'ngCookies',                //Manage cookies (Adds $cookies, $cookieStore, $cookiesProvider)
                'ngTouch',                  //Touch screen devices directives (Adds ngSwipeLeft, ngSwipeRight)
                'ui.router',                //Routing provider with states
                'ngMaterial',               //Angular material module
                'ngFileUpload',             //File upload with multiple optionality
                'md.data.table',            //Material design data tables
                'ngMap',                    //Easy and very complete maps module
                'ui.event',                 //Call backs for every not angular event (blurs, focus, double-clicks...etc)
                'cloudinary',               //Epic cloud image administrator
                'toastr',                   //Nice toast provider
                'ngMessages',               //Set forms field states, errors ...etc
                'lfNgMdFileInput'           //Cool file input for angular material https://github.com/shuyu/angular-material-fileinput
            ]
        );
        //'ngRepeatReorder',          //Easy way to make organizable list of items
})();
