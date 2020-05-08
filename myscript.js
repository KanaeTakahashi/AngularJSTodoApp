// メソッドやプロパティを定義できる
angular.module('myapp', [])
    // MainControllerを追加
    .controller('MainController', ['$scope', function($scope){
        $scope.tasks = [
            {"body":"do this 1", "done":false},
            {"body":"do this 3", "done":false},
            {"body":"do this 3", "done":true},
            {"body":"do this 4", "done":false},
        ];
    }]);
