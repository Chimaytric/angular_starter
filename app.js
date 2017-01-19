'use strict'

angular.module('demoApp', [
    'ui.router',
    'demoApp.rootComponent',
    'demoApp.headerComponent',
    'demoApp.homeComponent',
    'demoApp.page1Component',
    'demoApp.page2Component'
])

.config(function($stateProvider, $urlRouterProvider){

    var homeState = {
        name: 'home',
        url: '/',
        component: 'homeComponent'
    };

    var page1State = {
        name: 'page1',
        url: '/page1',
        component: 'page1Component'
    };

    var page2State = {
        name: 'page2',
        url: '/page2',
        component: 'page2Component'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(page1State);
    $stateProvider.state(page2State);

    $urlRouterProvider.when('', '/');

});