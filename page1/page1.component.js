function Page1Controller(){
    console.log('Page 1 controller');
}

Page1Controller.$inject = [];

angular.module('demoApp.page1Component', []).component('page1Component', {
    templateUrl: 'page1/page1.component.html',
    controller: Page1Controller,
    controllerAs: "page1Ctrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {}
});