(function () {
    'use strict';

    angular.module('givesBack.categories')
        .factory('newCategory', newCategory);

    newCategory.$inject = ['$ionicModal', 'CategoryService'];

    /* @ngInject */
    function newCategory($ionicModal, CategoryService) {

        return {
            setupNewCategoryModal: setupNewCategoryModal,
            buttonTemplate: '<i class="icon ion-edit"></i>Edit'
        };

        function setupNewCategoryModal(scope) {

            scope.createNewCategory = function (category) {
                // Default image being put here for now
                var categoryModel = {
                    id: Math.floor((Math.random() * 1000000) + 1),
                    title: category.title,
                    image: 'img/social.png'
                };

                CategoryService.categories.push(categoryModel);
                scope.newCategoryModal.hide();
            };

            scope.cancelCreateCategory = function () {
                scope.newCategoryModal.hide();
            };

            return $ionicModal.fromTemplateUrl('categories/templates/create-new-category.html', {
                scope: scope,
                animation: 'slide-in-up'
            });
        }

    }
})();
