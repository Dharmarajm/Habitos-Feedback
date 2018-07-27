angular.module('login', [])

.controller('LoginCtrl', function($scope,$state,$http,$rootScope,$ionicPopup,$ionicLoading,$timeout) {

    $scope.user={username:""}
    $scope.login=function(){
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
		 $scope.data= $scope.user.username;
     $http.post(APIURL+'/api/v1/user_feedbacks_login?user_code='+$scope.data).then(function(response){
       if(response.data==true){
        $timeout(function() {
            $ionicLoading.hide();
          })
        localStorage.setItem("usercode",$scope.data);
        $state.go("feedback");
       }else if(response.data==false){
        $timeout(function() {
            $ionicLoading.hide();
          })
         $ionicPopup.alert({
          title: 'Habitos Feedback',
          template: 'Please enter valid user code'
         })
       }
     },function(error){
      $timeout(function() {
            $ionicLoading.hide();
          })
       $ionicPopup.alert({
        title: 'Habitos Feedback',
        template: 'Failed to connect the server'
      })
     })
    }

    $scope.logout=function(){
      $ionicPopup.confirm({
        title: "Do you want to Logout?",
        template: '<style>.popup { width:700px; } .popup-head { background-color: #FFFFFF; } .popup-title { color: #000; }</style>',
          buttons: [{ text: 'Yes',
          type: 'button-positive',
          onTap: function(){
            localStorage.clear();
            $state.go("login")
          }
          },{
           text: 'cancel',
           type: 'button-danger',
           onTap: function(){}
        }]
      });
      
    }
 })



