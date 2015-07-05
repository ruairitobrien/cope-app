(function () {
    'use strict';

    angular.module('givesBack')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = [
        '$scope',
        '$ionicActionSheet',
        '$ionicModal',
        '$ionicNavBarDelegate',
        'CategoryService',
        'settings',
        'colourPicker'
    ];

    /* @ngInject */
    function DashboardCtrl($scope,
                           $ionicActionSheet,
                           $ionicModal,
                           $ionicNavBarDelegate,
                           CategoryService,
                           settings,
                           colourPicker) {
        /* jshint validthis: true */
        var vm = this;
        vm.activate = activate;
        vm.showMenu = showMenu;
        vm.title = 'DashboardCtrl';

        activate();

        ////////////////

        function activate() {
            vm.categories = CategoryService.categories;

            $scope.$watch(function () {
                return CategoryService.categories;
            }, function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    vm.categories = newVal;
                }
            }, true);

            colourPicker.setupColourPickerModal($scope).then(function (modal) {
                $scope.colourPickerModal = modal;
            });
        }

        function showMenu() {
            $ionicActionSheet.show({
                buttons: [
                    {text: colourPicker.buttonTemplate},
                    {
                        text: (settings.locked) ? '<i class="icon ion-unlocked"></i>Unlock' : '<i class="icon' +
                        ' ion-locked"></i>Lock'
                    },
                    {
                        text: '<i class="icon ion-edit"></i>Edit'
                    }
                ],
                titleText: 'Settings',
                cancelText: 'Cancel',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    if (index === 0) {
                        $scope.colourPickerModal.show();
                    } else if (index === 1) {
                        settings.locked = !settings.locked;
                        $ionicNavBarDelegate.showBackButton(!settings.locked);
                    }

                    return true;
                }
            });
        }

    }
})();