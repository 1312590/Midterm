(function() {
'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);
    
    ProfileController.$inject = ['$http'];
    function ProfileController($http) {
        var vm = this;
        vm.isHide = true;
        vm.account = {};
        vm.hide = hideFunction;
        vm.summary = null;
        
        activate();

        ////////////////

        function activate() { 
            $http.get('data/data.json').then(function(response) {
                vm.account = response.data.account;
                vm.summary = response.data.summary;
            });
        }
        
        function hideFunction() {
            vm.isHide = !vm.isHide;
        }
    }
})();