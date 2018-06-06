// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','login','feedback','ionic-ratings','ionic-toast'])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    document.addEventListener("deviceready", function() {
    hockeyapp.start(success, error, "d779544bc4604ebab33689bef11a15fd");
    
    function error(error) {
     console.log(error);
    }
    
    function success(status) {
     console.log(status);
    }
    
   }, false);
  });

  $ionicPlatform.registerBackButtonAction(function(e) {
   e.preventDefault();
   function showConfirm() {
    var confirmPopup = $ionicPopup.show({
     title : 'Habitos Feedback',
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

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none');
  $stateProvider

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'FeedBackCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  if(localStorage.getItem("usercode")!=undefined){
    $urlRouterProvider.otherwise('/feedback');
  }else{
    $urlRouterProvider.otherwise('/login');
  }
})

//var APIURL="http://192.168.1.72:3005"
var APIURL="http://api.learnstein.com:81";
//var APIURL="http://api.idlidabba.com"