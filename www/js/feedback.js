angular.module('feedback',[])

.controller('FeedBackCtrl', function($scope,$http,$ionicPopup,$state,$location) {
  $scope.ratingsObject = {
    iconOn : 'ion-happy',
    iconOff : 'ion-happy-outline',
    iconOnColor: '#7EB835',
    iconOffColor:  '#7EB835',
    /*justify-content: 'center',
    display: 'flex',
    align-items: 'center',*/
    rating:  0,
    minRating:0,
    callback: function(rating) {
      $scope.ratingsCallback(rating);
    }
  };

  $scope.ratingsCallback = function(rating) {
    console.log('Selected rating is : ', rating);
    $scope.captureRating=rating;
  };

  $scope.submit=function(){

    console.log($scope.ratingsObject);
    var data={
              "user_code" :localStorage.getItem("usercode"),
              "rating":$scope.captureRating
             };
   if($scope.captureRating!=0 && $scope.captureRating!=undefined){
     $http.post(APIURL+'api/v1/user_feebacks',data).then(function(response){
       if(response.data.id!=undefined){
         $ionicPopup.alert({
          title: 'Habitos Feedback',
          template: 'Feedback is updated'
         })
         $state.reload();
       }else{

       }
     },function(error){
       $ionicPopup.alert({
        title: 'Habitos Feedback',
        template: 'Failed to connect the server'
      })
     })
   }else{
     $ionicPopup.alert({
      title: 'Habitos Feedback',
      template: 'Please enter the feedback'
     })
   }           
  }

})