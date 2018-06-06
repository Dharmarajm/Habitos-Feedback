angular.module('login', [])

.controller('LoginCtrl', function($scope,$state,$http,$rootScope,$ionicPopup) {

    $scope.user={username:""}
    $scope.login=function(){
		$state.go("feedback");
       /*$http.get(APIURL+'/api/v1/parentlogin?id='+$scope.user.username+'&dob='+$scope.user.password)
       .then(function(response) {
          if(response.data == false){
            alert("Invalid Credentials");
            $scope.user.password="";
          }
          else if (response.data[0][3]=="Individual" &&  $scope.user.username == response.data[0][1] ){
            localStorage.setItem("tenant_id",response.data[0][2])
            localStorage.setItem("stud_id",response.data[0][1])
            $state.go("tab.mealplans");
          }
           else{
            alert("Invalid Credentials");
             $scope.user.password="";
          }
       })*/
    
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

   /* $scope.inputType = 'password';
    $scope.ShowPassword = function(){
      if ($scope.inputType == 'password')
        $scope.inputType = 'text';
      else
        $scope.inputType = 'password';
    }*/

 })



