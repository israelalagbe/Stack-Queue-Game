angular.module('Game', ['ionic', 'Game.Controller'])
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "templates/home.html",
                controller: 'home'
            })
            .state('queue', {
                url: "/queue/:level",
                templateUrl: "templates/queue.html",
                controller: 'queue'
            })
            .state('queue-question', {
                url: "/questions/:game/:level",
                templateUrl: "templates/question.html",
                controller: 'question'
            })
            .state('queue-answers', {
                url: "/solutions/:game/:level",
                templateUrl: "templates/solution.html",
                controller: 'solution'
            })
            .state('stack', {
                url: "/stack/:level",
                templateUrl: "templates/stack.html",
                controller: 'stack'
            })
        $urlRouterProvider.otherwise('/');
    })
    .run(function ($ionicPlatform) {
        // Disable BACK button on home
        $ionicPlatform.registerBackButtonAction(function (event) {
            navigator.app.exitApp();

        }, 100);
    })
    .factory('Dialog', function ($ionicPopup) {
        return {
            alert: function (title, content) {
                var alert = $ionicPopup.alert({
                    title: title,
                    template: content
                });
                return alert;
                /*alert.then(function(res) {
                console.log('Yeah!! I know!!');
                });*/
            }
        };
    })
    .factory('Game', function () {
        var game = new Game()
        return game;
    })
    .factory('Loader', ['$ionicLoading', '$timeout', function ($ionicLoading, $timeout) {
        return {
            show: function (text) {
                var config = {
                    showBackdrop: true,
                    animation: 'fade-in'
                }
                if (text)
                    config.template = text;
                $ionicLoading.show(config);
            },
            hide: function () {
                $ionicLoading.hide();
            },
            toggle: function (text, timeout) {
                var that = this;
                that.show(text);
                $timeout(function () {
                    that.hide();
                }, timeout || 3000);
            }
        };
    }]);