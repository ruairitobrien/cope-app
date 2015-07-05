(function () {
    'use strict';

    angular.module('givesBack.howtos')
        .factory('HowToService', HowToService);

    HowToService.$inject = ['lodash', 'defaultHowTos'];

    /* @ngInject */
    function HowToService(lodash, defaultHowTos) {
        var howtos = defaultHowTos;

        return {
            findById: function (id) {
                return lodash.find(howtos, function (item) {
                    return item.id == id;
                });
            },
            findByCategoryId: function (id) {
                return lodash.filter(howtos, function (item) {
                    return item.categoryId == id;
                });
            },
            howtos: howtos
        };
    }

})();
