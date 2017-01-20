function Page2Controller(){
    console.log('Page 2 controller');
}

Page2Controller.$inject = [];

angular.module('demoApp.page2Component', []).component('page2Component', {
    templateUrl: 'page2/page2.component.html',
    controller: Page2Controller,
    controllerAs: "page2Ctrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {}
});