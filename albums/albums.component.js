function AlbumsController(albumsData){
    console.log('Albums controller');

    var vm = this;

    vm.albums = [];

    vm.currentAlbum = {
        name: null,
        id: null,
        pictures: [],
        user: {
            userId: null,
            userName: null
        }
    }

    vm.getAlbumsData = function(){
        albumsData.getAlbums().then(function(albums){
            vm.albums = albums;
        });
    }

    vm.getAlbumContent = function(albumId, albumName, userId){
        vm.currentAlbum.name = albumName;
        vm.currentAlbum.id = albumId;
        albumsData.getPicturesOf(albumId).then(function(pictures){
            vm.currentAlbum.pictures = pictures;
        });
        albumsData.getUser(userId).then(function(user){
            vm.currentAlbum.user.userId = user.id;
            vm.currentAlbum.user.userName = user.username;
        })
    }
}

AlbumsController.$inject = ['albumsData'];

angular.module('demoApp.albumsComponent', []).component('albumsComponent', {
    templateUrl: 'albums/albums.component.html',
    controller: AlbumsController,
    controllerAs: "albumsCtrl",
    require: {
        parent: '^rootComponent'
    },
    bindings: {}
})

.factory('albumsData', function($http){
    return{
        getAlbums: function(){
            var urlRoot = 'https://jsonplaceholder.typicode.com/albums';
            return $http({
                method: 'GET',
                url: urlRoot
            }).then(function(response){
                return response.data;
            }).catch(function(response){
                console.log(response.status);
                console.log(response.statusText);
                return response;
            });
        },
        getPicturesOf: function(albumId) {
            var urlRoot = 'https://jsonplaceholder.typicode.com/photos?albumId=';
            return $http({
                method: 'GET',
                url: urlRoot+albumId
            }).then(function(response){
                return response.data;
            }).catch(function(response){
                console.log(response.status);
                console.log(response.statusText);
                return response;
            });
        },
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