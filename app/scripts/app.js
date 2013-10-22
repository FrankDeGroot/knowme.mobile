/// <reference path="../../typescript_declarations/app.d.ts" />
'use strict';
angular.module('knowme.mobileApp', [
    'ngResource'
]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
//# sourceMappingURL=app.js.map
