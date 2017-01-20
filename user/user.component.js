function UserController($stateParams, userData){
    console.log('User controller');

    var vm = this;

    vm.user = {};

    vm.getUserData = function(){
        userData.getUser($stateParams.id).then(function(user){
            vm.user = user;
        });
    }
}

UserController.$inject = ['$stateParams', 'userData'];

angular.module('demoApp.userComponent', []).component('userComponent', {
    templateUrl: 'user/user.component.html',
    controller: UserController,
    controllerAs: "userCtrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {
        data: '='
    }
})

.factory('userData', function($http){
    return{
        getUser: function(userId){
            var urlRoot = 'https://jsonplaceholder.typicode.com/users/';
            return $http({
                method: 'GET',
                url: urlRoot+userId
            }).then(function(response){
                return response.data;
            }).catch(function(response){
                console.log(response.status);
                console.log(response.statusText);
                return response;
            });
        }
    }
});