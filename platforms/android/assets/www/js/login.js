angular.module('login', [])

.controller('LoginCtrl', function($scope,$state,$http,$rootScope,$ionicPopup) {

    $scope.user={username:""}
    $scope.login=function(){
		 $scope.data= $scope.user.username;
     $http.post(APIURL+'api/v1/user_feebacks_login?user_code='+$scope.data).then(function(response){
       if(response.data==true){
        localStorage.setItem("usercode",$scope.data);
        $state.go("feedback");
       }else if(response.data==false){
         $ionicPopup.alert({
          title: 'Habitos Feedback',
          template: 'Feedback code is wrong'
         })
       }
     },function(error){
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



