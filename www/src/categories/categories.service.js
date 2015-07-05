(function () {
    'use strict';

    angular.module('givesBack.categories')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['lodash', 'defaultCategories'];

    /* @ngInject */
    function CategoryService(lodash, defaultCategories) {
        var categories = defaultCategories;

        return {
            findById: function (id) {
                return lodash.find(categories, function (item) {
                    return item.id == id;
                });
            },
            categories: categories
        };
    }

})();
