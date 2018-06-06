angular.module('feedback',[])

.controller('FeedBackCtrl', function($scope) {
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
    location.reload();
  };

  $scope.submit=function(){
  	location.reload();
  }

})