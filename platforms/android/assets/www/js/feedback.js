angular.module('feedback',[])

.controller('FeedBackCtrl', function($scope,$http,$ionicPopup,$state,$location,ionicToast,$ionicLoading,$timeout) {
  
  $scope.stars = [{"id":2,"image":"img/1.png","filled":false,"description":'Bad'},{"id":3,"image":"img/2.png","filled":false,"description":'Average'},{"id":4,"image":"img/3.png","filled":false,"description":'Good'},{"id":5,"image":"img/4.png","filled":false,"description":'Very Good'}]

  $scope.submit=function(){
    
    var data={
              "user_code" : localStorage.getItem("usercode"),
              "rating" : $scope.ratingValue
             };
   setTimeout(function(){
     $http.post(APIURL+'/api/v1/user_feebacks',data).then(function(response){
       if(response.data.id!=undefined){
         $ionicLoading.hide();
         angular.element(document.getElementsByClassName('col-25')).removeClass("active");
         $scope.stars = [{"id":2,"image":"img/1.png","filled":false,"description":'Bad'},{"id":3,"image":"img/2.png","filled":false,"description":'Average'},{"id":4,"image":"img/3.png","filled":false,"description":'Good'},{"id":5,"image":"img/4.png","filled":false,"description":'Very Good'}]
         ionicToast.show('Your feedback is updated.', 'bottom', false, 1000);
       }else{

       }
     },function(error){
       $ionicLoading.hide();
      ionicToast.show('Failed to connect the server', 'bottom', false, 1000);

     })
   },1000)        
  }
  
    $scope.toggle=function(index,star){
      $ionicLoading.show({
       template: '<img src="img/lg.rotating-balls-spinner.gif" alt="" style="width:50%;opacity:1" />',
       content: 'Loading',
       animation: 'fade-in',
       showBackdrop: true,
       maxWidth: 100,
       showDelay: 0
      }); 
      for(var i in $scope.stars){
       if($scope.stars[i].id==index)
        $scope.stars[i].filled=true;
       if($scope.stars[i].id!=index)
        $scope.stars[i].filled=false 
      }

      $scope.ratingValue=index;
      $scope.submit();
    } 

    /*$scope.getSelectedRating = function (rating) {

      $ionicLoading.show({
       template: '<img src="img/lg.rotating-balls-spinner.gif" alt="" style="width:50%;opacity:1" />',
       content: 'Loading',
       animation: 'fade-in',
       showBackdrop: true,
       maxWidth: 100,
       showDelay: 0
      });
      $scope.ratingValue=rating;
      $scope.submit();
    }*/

})/*.directive('starRating', function () {
    return {
        restrict: 'AEC',
        template: '<div class="rating row">' +
            '<div class="col col-25" ng-repeat="star in stars" id="strong" ng-class="{\'active\':star.filled==true }" ng-click="toggle(star.id,star)" style="text-align:center;">' +
            '<label style="text-align:center;"><img src="{{star.image}}"><br>{{star.description}}{{star.filled}}</label>' +
            '</div>' +
            '</div>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {
            scope.stars = [{"id":2,"image":"img/1.png","filled":false,"description":'Bad'},{"id":3,"image":"img/2.png","filled":false,"description":'Average'},{"id":4,"image":"img/3.png","filled":false,"description":'Good'},{"id":5,"image":"img/4.png","filled":false,"description":'Very Good'}] 
            var updateStars = function () {
                console.log('test')
                for (var i = 0; i < scope.max; i++) {
                    //scope.stars.push({
                    //    filled: i < scope.ratingValue
                    //});
                   if(scope.stars[i]!=undefined){ 
                    if(scope.stars[i].id!=scope.last){
                        scope.stars[i].filled=false;  
                      }
                   }

                }
            };

            scope.toggle = function (index,star) {
                
                scope.last=index;
                console.log(scope.last)
                scope.ratingValue = index;
                star.filled = !star.filled;

                scope.onRatingSelected({
                    rating: index
                });

            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
              console.log('test')
                if (oldVal) {
                    updateStars();
                }
              
            });
        }
    }
});*/