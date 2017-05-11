angular.module('StarWarsApp', ['ngResource'])

.factory('Films', ['$resource', function($resource) {
    return $resource('http://swapi.co/api/films/:id', {}, {
        query: { isArray: false }
    });
}])

.controller('FilmsCtrl', ['$scope', 'Films', function($scope, Films) {
    $scope.films = [];
    $scope.movieId = 1;
    $scope.loading = false;

    Films.query(function success(data) {
            $scope.films = data.results;
            $scope.loading = false;
        },
        function error(data) {
            $scope.loading = false;
        });

}]);
