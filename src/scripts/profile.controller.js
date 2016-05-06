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
        vm.project = {};
        vm.experience = {};
        vm.skills = {};
        vm.education = {};
        
        vm.editaccount = function (){
            if(vm.show===0)
            vm.show = 1;
            else vm.show = 0;
        }
        
        vm.editsummary = function (){
            if(vm.show1===0)
            vm.show1 = 1;
            else vm.show1 = 0;
        }
        
         vm.editproject = function (){
            if(vm.show2===0)
            vm.show2 = 1;
            else vm.show2 = 0;
        }
        
         vm.editexperience= function (){
            if(vm.show3===0)
            vm.show3 = 1;
            else vm.show3 = 0;
        }
        
         vm.editeducation= function (){
            if(vm.show4===0)
            vm.show4 = 1;
            else vm.show4 = 0;
        }
            
        vm.editskills= function (){
            if(vm.show5===0)
            vm.show5 = 1;
            else vm.show5 = 0;
        }
            
        activate();

        ////////////////

        function activate() { 
            $http.get('data/data.json').then(function(response) {
                vm.account = response.data.account;
                vm.summary = response.data.summary;
                vm.project = response.data.project;
                vm.experience = response.data.experience;
                vm.skills = response.data.skills;
                vm.education = response.data.education;
            });
        }
        
        function hideFunction() {
            vm.isHide = !vm.isHide;
        }
    }
})();