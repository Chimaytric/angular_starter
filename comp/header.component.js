function HeaderController(){
    console.log('Header component');
}

HeaderController.$inject = [];

angular.module('demoApp.headerComponent', ['ui.bootstrap']).component('headerComponent', {
    templateUrl: 'comp/header.component.html',
    controller: HeaderController,
    controllerAs: "headerCtrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {}
});