(function (angular) {
    'use strict'
    angular.module("MyApp", ["MyController", "ngAnimate", "ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("Home");
            $stateProvider
            .state('login', {
                url : '/login',
                templateUrl : 'login.html',
                controller : 'LoginController'
              })
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
                .state('Transaksi', {
                    url: "/Transaksi",
                    templateUrl: "views/pages/Transaksi.html",
                    controller: "TransaksiController"
                });
        })

})(window.angular);
