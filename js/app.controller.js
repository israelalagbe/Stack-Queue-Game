angular.module('Game.Controller', ['ionic', 'Game.factory'])
    .controller('home', function(Dialog, $scope, $location, Loader) {
        $scope.queueGame = function() {
            $location.path('/queue/1');
            Loader.show("Please wait!")
        }
        $scope.stackGame = function() {
            $location.path('/stack/1');
            Loader.show("Please wait!")
        }
        //Dialog.alert("Title","The content is not good")
    })
    .controller('queue', function(Dialog, $stateParams, Loader, $scope, Game,$location) {
        // $scope.$on('$ionicView.beforeLeave', function() {
        //  alert("leaving")
        // })
        Game.stopGame()
        Game.ready(function() {
            document.getElementById('game').appendChild(Game.view)
            Loader.hide()
            Dialog.alert("Instructions", "Cross the road by clicking on each of the old women. Avoid hitting the cars while doing so")
            Game.showGame(QueueGame, Number($stateParams.level),function(){
                //$location.path('/queue/'+$stateParams.level)
                $location.path('/questions/queue' + '/' + $stateParams.level);
                Dialog.alert("Message","You win")
            },function(){
                
                Dialog.alert("Message","You lose")
                $location.path('/');
            })



            //
        })


        //Dialog.alert("Title", "Level " + $stateParams.level)
    })
    .controller('stack', function(Dialog, $stateParams, Game, Loader, $scope,$location) {
        // $scope.$on('$ionicView.beforeLeave', function() {
        //  alert("leaving")
        // })
        Game.stopGame()
        Game.ready(function() {
            document.getElementById('game').appendChild(Game.view)
            Loader.hide()
            //Dialog.alert("Instructions", )
            Dialog.alert("Instructions", "Move the stack to the other side by clicking on each of the boxes and avoid colling with the fire while doing so")
            Game.showGame(StackGame, Number($stateParams.level),function(){
                //$location.path('/queue/'+$stateParams.level)
                $location.path('/questions/stack' + '/' + $stateParams.level);
                Dialog.alert("Message","You win")
            },function(){
                
                Dialog.alert("Message","You lose")
                $location.path('/');
            })




        })

        //Dialog.alert("Title", "Level " + $stateParams.level)
    })
    .controller('question', function(Dialog, $state, $stateParams, questions, $scope, QuestionData, $location) {
        var level = $stateParams.level
        var game = $stateParams.game;
        $scope.questions = JSON.parse(JSON.stringify(questions()[game][level]));
        $scope.submit = function() {
            QuestionData.save($scope.questions)
            for (var index in $scope.questions) {
                var item = $scope.questions[index];
                if (!item.choice) {
                    Dialog.alert("message", "Please answer empty questions")
                    return;
                }
            }
            $location.path('/solutions/' + game + '/' + level);
        }
    })
    .controller('solution', function($state, QuestionData, $stateParams, questions, $scope, $location) {
        var level = Number($stateParams.level)
        var game = $stateParams.game;
        $scope.questions = QuestionData.get()
        $scope.getSolutionClass = function(question, option) {
            if (question.choice == option.value) {
                if (question.choice == question.answer)
                    return 'item-success';
                else
                    return 'item-error';
            }
            //QuestionData
            //console.log(item,index)
            //item.choice==item.answer&&item.cho?'item-success':'item-error'
        }
        $scope.nextLevel = function() {
            if (level == '3')
                $location.path('/');
            else{
                //console.log('/' + game + '/' + (++level))
                $location.path('/' + game + '/' + (++level));
            }
        }
        //$scope.questions=questions()[game][level];
        //window.questions=$scope.questions
    })