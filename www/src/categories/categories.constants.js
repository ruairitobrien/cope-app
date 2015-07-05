(function () {
    'use strict';

    var defaultCategories = [
    /** {
            parentId: 0,
            id: 1,
            title: 'Social',
            image: 'img/social.png'
        },*/
        {
            parentId: 0,
            id: 2,
            title: 'Personal',
            image: 'img/personal.png'
        },
        {
            parentId: 0,
            id: 3,
            title: 'Health',
            image: 'img/health.png'
        }
    ];

    angular
        .module('givesBack.categories')
        .constant('defaultCategories', defaultCategories);

})();
