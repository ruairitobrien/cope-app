angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, categoriesPromise) {

        $scope.categories = categoriesPromise.data;

    })

.controller('HealthCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
})

.controller('CategoryCtrl', function($scope) {


    $scope.insert = function(parentId, title, image, audio) {
        var newRecord = {
            parentId: parentId,
            title: title,
            image: image,
            audio: audio
        };

        $scope.categories.push(newRecord);

    };

})

