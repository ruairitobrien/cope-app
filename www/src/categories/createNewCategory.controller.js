(function () {
    'use strict';

    angular.module('givesBack.categories')
        .controller('CreateNewCategoryCtrl', CreateNewCategoryCtrl);

    CreateNewCategoryCtrl.$inject = ['$scope', 'CategoryService', 'defaultCategories'];


    /* @ngInject */
    function CreateNewCategoryCtrl($scope, CategoryService) {

        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'CreateNewCategoryCtrl';
        vm.newRecord = {
            parentId: 0,
            categoryId: '/' + $scope.title,
            title: $scope.title,
            image: 'img/sun.jpg',
            audio: ''
        };

        vm.trackAudio = function (audio) {
            audio.cls = 'task-clicked';
        };

        vm.insert = function (parentId, title, image, audio) {
            vm.newRecord = {
                parentId: parentId,
                title: title,
                image: image,
                audio: audio
            };

            vm.categories.push(vm.newRecord);

        };

        activate();

        ////////////////

        function activate() {
        }

    }
})();

