(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', '$firebaseObject', '$firebaseArray'];
    function ProfileController($scope, $firebaseObject, $firebaseArray) {
        var vm = this;
        vm.account = {};
        vm.summary = null;
        vm.project = {};
        vm.experience = {};
        vm.skills = {};
        vm.education = {};

        window.sc = $scope;
        //Link database được tạo trên firebase
        var ref = new Firebase("https://linkedin-dack-1312590.firebaseio.com/");
        var obj = $firebaseObject(ref);

        //Bind các dữ liệu ở các nguồn lại với nhau, khi cập nhật trên trang web thì thay đổi luôn cả data
        obj.$bindTo($scope, 'data').then(function () {
            vm.account = $scope.data.account;
            vm.summary = $scope.data.summary;
            vm.project = $scope.data.project;
            vm.experience = $scope.data.experience;
            vm.skills = $scope.data.skills;
            vm.education = $scope.data.education;

        });

        $scope.isLogin = false;
        //Authentication 
        // Create a callback which logs the current auth state
        function authDataCallback(authData) {
            if (authData) {
                console.log("User " + authData.uid + " is logged in with " + authData.provider);
                $scope.isLogin = true;
                sc.userdata = authData;
            } else {
                console.log("User is logged out");
                $scope.isLogin = false;
            }
            $scope.$evalAsync();
        }

        ref.onAuth(authDataCallback);

        sc.login = function login() {
            ref.authWithPassword({
                email: vm.user_email,
                password: vm.user_password
            }, authHandler);
        }

        sc.logout = function logout() {
            ref.unauth();
        }

        function authHandler(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        }

        //EDIT BUTTON

        vm.editaccount = function () {
            if (vm.show === 0)
                vm.show = 1;
            else vm.show = 0;
        }

        vm.editsummary = function () {
            if (vm.show1 === 0)
                vm.show1 = 1;
            else vm.show1 = 0;
        }

        vm.editproject = function () {
            if (vm.show2 === 0)
                vm.show2 = 1;
            else vm.show2 = 0;
        }

        vm.editexperience = function () {
            if (vm.show3 === 0)
                vm.show3 = 1;
            else vm.show3 = 0;
        }

        vm.editeducation = function () {
            if (vm.show4 === 0)
                vm.show4 = 1;
            else vm.show4 = 0;
        }

        vm.editskills = function () {
            if (vm.show5 === 0)
                vm.show5 = 1;
            else vm.show5 = 0;
        }

        function hideFunction() {
            vm.isHide = !vm.isHide;
        }
    }
})();