//Task Branch
// Ionic Starter App


var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'templates', 'starter.controllers', 'starter.services', 'starter.topbar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Each tab has its own nav history stack:�

  .state('dash', {
    url: '/dash',
    templateUrl: 'templates/dash.html',
    controller: 'DashCtrl',
    resolve: {
        categoriesPromise: function ($http) {
            // $http returns a promise for the url data
            return $http({method: 'GET', url: '/data/categories.json'});
        }
    }
  })

  .state('health', {
      url: '/health',
      templateUrl: 'templates/health.html'
  })

  .state('health-washing', {
      url: '/health/washing',
      templateUrl: 'templates/health-washing.html'
  })

  .state('health-mybody', {
          url: '/health/mybody',
          templateUrl: 'templates/health-mybody.html'
      })

  .state('health-washing-how-to', {
      url: '/health/washing/how-to',
      templateUrl: 'templates/health-washing-how-to.html',
      controller: 'HealthCtrl'
  })
      .state('health-mybody-how-to', {
          url: '/health/mybody/how-to',
          templateUrl: 'templates/health-mybody-how-to.html'
      })
      .state('newcategory', {
          url: '/newcategory',
          templateUrl: 'templates/create-new-category.html',
          controller: 'CategoryCtrl'

      })
      .state('personal', {
          url: '/personal',
          templateUrl: 'templates/personal.html'
      })
      .state('hoisting', {
          url: '/personal/hoisting',
          templateUrl: 'templates/hoisting.html'
      })
      .state('hoisting-how-to', {
          url: '/personal/hoisting/how-to',
          templateUrl: 'templates/hoisting-how-to.html',
          controller: 'PersonalCtrl'
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');

});
