function PostsController(postsData){
    console.log('Posts controller');

    var vm = this;

    vm.params = {
        start: 1,
        number: 10,
        max: 100
    }
    vm.data =  [];

    vm.getPosts = function(nextPage){
        if(nextPage && (vm.params.start + vm.params.number) <= vm.params.max)
            vm.params.start = vm.params.start + vm.params.number;
        
        for(var i = vm.params.start; i < (vm.params.start + vm.params.number); i++){
            postsData.getPost(i).then(function(post){
                postsData.getPostAuthor(post.userId).then(function(user){
                    post.userName = user.username;
                });
                postsData.getPostComments(post.id).then(function(comments){
                    post.comments = comments;
                });
                vm.data[post.id - 1] = post;
            });
        }
    }
}

PostsController.$inject = ['postsData'];

angular

.module('demoApp.postsComponent', []).component('postsComponent', {
    templateUrl: 'posts/posts.component.html',
    controller: PostsController,
    controllerAs: "postsCtrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {}
})

.factory('postsData', function($http){
    return{
        getPost: function(postId){
            var urlRoot = 'https://jsonplaceholder.typicode.com/posts/';
            return $http({
                method: 'GET',
                url: urlRoot+postId
            }).then(function(response){
                return response.data;
            }).catch(function(response){
                console.log(response.status);
                console.log(response.statusText);
                return response;
            });
        },
        getPostAuthor: function(authorId){
            var urlRoot = 'https://jsonplaceholder.typicode.com/users/';
            return $http({
                method: 'GET',
                url: urlRoot+authorId
            }).then(function(response){
                return response.data;
            }).catch(function(response){
                console.log(response.status);
                console.log(response.statusText);
                return response;
            });
        },
        getPostComments: function(postId){
            var urlRoot = 'https://jsonplaceholder.typicode.com/posts/'
            return $http({
                method: 'GET',
                url: urlRoot+postId+'/comments'
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