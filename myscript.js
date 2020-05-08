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

            // task配列の done=true の数を数える
            angular.forEach($scope.tasks, function(task) {
                count += task.done ? 1 : 0;

                // 下記でもよい
                // if(task.done) {
                //     count++;
                // }
            });

            return count;
        };

        // 完了タスクを削除するイベント
        $scope.deleteDone = function() {
            // バックアップ
            var oldTasks = $scope.tasks;
            // 初期化
            $scope.tasks = [];

            angular.forEach(oldTasks, function(task) {
                if(!task.done) {
                    $scope.tasks.push(task);
                }
            }); 
        };
    }]);
