(function () {
    'use strict';

    angular.module('givesBack.categories')
        .factory('categoryEditor', categoryEditor);

    categoryEditor.$inject = ['$ionicModal', 'CategoryService', 'newCategory'];

    /* @ngInject */
    function categoryEditor($ionicModal, CategoryService, newCategory) {

        return {
            setupCategoryEditorModal: setupCategoryEditorModal,
            buttonTemplate: '<i class="icon ion-edit"></i>Edit'
        };

        function setupCategoryEditorModal(scope) {
            scope.categories = CategoryService.categories;

            scope.cancelEditCategories = function () {
                scope.categoryEditorModal.hide();
            };

            newCategory.setupNewCategoryModal(scope).then(function (modal) {
                scope.newCategoryModal = modal;
            });

            scope.newCategory = function () {
                scope.newCategoryModal.show();
            };

            scope.removeCategory = function (index) {
                CategoryService.categories.splice(index, 1);
                scope.categories = CategoryService.categories;
            };

            return $ionicModal.fromTemplateUrl('categories/templates/edit-categories.html', {
                scope: scope,
                animation: 'slide-in-up'
            });
        }

    }
})();
