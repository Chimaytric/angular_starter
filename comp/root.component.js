function RootController(){
    console.log('Root component');
}

RootController.$inject = [];

angular.module('demoApp.rootComponent', []).component('rootComponent', {
    templateUrl: 'comp/root.component.html',
    controller: RootController,
    controllerAs: "rootCtrl",
    bindings: {}
});