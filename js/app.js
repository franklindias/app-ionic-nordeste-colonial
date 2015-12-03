// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('AppArq', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    $ionicConfigProvider.views.maxCache(2);
    
    if (ionic.Platform.isAndroid()) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
        }
    
    $stateProvider
        .state('app', {
        url: '/',
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
      })
        .state('sobre', {
        url: '/sobre',
        templateUrl: 'templates/sobre.html',
        controller: 'SobreController'
      })
        .state('cronograma', {
        url: '/cronograma',
        templateUrl: 'templates/cronograma.html',
        controller: 'CronogramaController'
      })
        .state('locais', {
        url: '/locais',
        templateUrl: 'templates/locais.html',
        controller: 'LocaisController'
      })
        .state('local', {
        url: '/local/:id',
        templateUrl: 'templates/local.html',
        controller: 'LocalController'
      })
    .state('local-qr', {
        url: '/local/:id/:status',
        templateUrl: 'templates/local.html',
        controller: 'LocalController'
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});





















