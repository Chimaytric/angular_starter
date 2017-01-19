function HomeController(){
    console.log('Home component');
}

HomeController.$inject = [];

angular.module('demoApp.homeComponent', []).component('homeComponent', {
    templateUrl: 'home/home.component.html',
    controller: HomeController,
    controllerAs: "homeCtrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {}
});