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

        // 要素追加イベント
        $scope.addNew = function(){
            // tasks配列に要素を追加する
            $scope.tasks.push({"body":$scope.newTaskBody, "done":false});
            // 初期化
            $scope.newTaskBody = '';
        };

        // 完了タスクを取得イベント
        $scope.getDoneCount = function() {
            var count = 0;
            
            return count;
        }
    }]);
