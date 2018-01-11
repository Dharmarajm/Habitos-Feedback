// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','login','feedback','ionic-ratings'])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $ionicPlatform.registerBackButtonAction(function(e) {
   e.preventDefault();
   function showConfirm() {
    var confirmPopup = $ionicPopup.show({
     title : 'Idlidabba Says :-)',
     template : 'Are you sure want to exit ?',
     buttons : [{
      text : 'Cancel',
      type : 'button-positive',
     }, {
      text : 'Ok',
      type : 'button-danger',
      onTap : function() {
       ionic.Platform.exitApp();
      }
     }]
    });
   };

    if($state.current.name=='feedback' || $state.current.name=='login'){
     showConfirm();
    }
    else {
      navigator.app.backHistory();
    }
  }, 100);

})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

  $urlRouterProvider.otherwise('/login');
})