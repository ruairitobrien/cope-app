(function () {
    'use strict';

    var defaultColours = [
        'default-colour',
        'red-colour',
        'blue-colour',
        'orange-colour',
        'green-colour'
    ];

    angular
        .module('givesBack.settings')
        .constant('defaultColours', defaultColours);

})();
