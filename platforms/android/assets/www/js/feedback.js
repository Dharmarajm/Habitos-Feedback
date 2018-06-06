angular.module('feedback',[])

.controller('FeedBackCtrl', function($scope,$http,$ionicPopup,$state,$location,ionicToast) {
  
  $scope.entered = false;
  $scope.$on("$ionicView.enter", function () { $scope.entered = true; });

  $scope.ratingsObject = {
    iconOn : 'ion-happy-outline',/*ion-happy*/
    iconOff : 'ion-happy-outline',
    iconOnColor: '#ee5423',/*#7EB835*/
    iconOffColor:  '#cacacafc',/*rgba(195, 174, 27, 0.99)*/
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
    /*return $scope.submit();*/
  };

  $scope.submit=function(){

    console.log($scope.ratingsObject);
    var data={
              "user_code" :localStorage.getItem("usercode"),
              "rating":$scope.captureRating
             };
   if($scope.captureRating!=0 && $scope.captureRating!=undefined){
     $http.post(APIURL+'/api/v1/user_feebacks',data).then(function(response){
       if(response.data.id!=undefined){
         ionicToast.show('Your feedback is updated.', 'bottom', false, 1000);
         $state.reload();
         /*$ionicPopup.alert({
          title: 'Habitos Feedback',
          template: 'Feedback is updated'
         })*/
       }else{

       }
     },function(error){
       /*$ionicPopup.alert({
        title: 'Habitos Feedback',
        template: 'Failed to connect the server'
      })*/
      ionicToast.show('Failed to connect the server', 'bottom', false, 1000);
     })
   }else{
     /*$ionicPopup.alert({
      title: 'Habitos Feedback',
      template: 'Please enter your feedback'
     })*/
     ionicToast.show('Please enter your feedback', 'bottom', false, 1000);
   }           
  }

})