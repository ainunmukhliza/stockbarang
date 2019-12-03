(function (angular) {
    'use strict'
    angular.module("MyApp", ["MyController", "ngAnimate", "ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("Home");
            $stateProvider
                .state('Home', {
                    url: "/Home",
                    templateUrl: "views/pages/Home.html",
                    controller: "HomeController"
                })
                .state('Barang', {
                    url: "/Barang",
                    templateUrl: "views/pages/Barang.html",
                    controller: "BarangController"
                })
                .state('Suplier', {
                    url: "/Suplier",
                    templateUrl: "views/pages/Suplier.html",
                    controller: "SuplierController"
                })
                .state('Pembelian', {
                    url: "/Pembelian",
                    templateUrl: "views/pages/Pembelian.html",
                    controller: "PembelianController"
                })
                .state('Penjualan', {
                    url: "/Penjualan",
                    templateUrl: "views/pages/Penjualan.html",
                    controller: "PenjualanController"
                })
                .state('Laporan', {
                    url: "/Laporan",
                    templateUrl: "views/pages/Laporan.html",
                    controller: "LaporanController"
                });
        })
                .controller("view", function($scope, $window){
                    if($window.sessionStorage.getItem("username")==undefined || $window.sessionStorage.getItem("username")=="" || $window.sessionStorage.getItem("username")==null){
                        window.location.href="login.html";
                    }
                    $scope.Logout= function(){
                        sessionStorage.clear();
                        window.location.href="index.html";
                    }
                })
})(window.angular);
