(function (angular) {
    'use strict'
    angular.module("MyController", [])
        .controller("HomeController", function ($scope, $http) {

        })

        //Barang
        .controller("BarangController", function ($scope, $http) {
            $scope.DatasBarang = [];
            $scope.input={};
            $scope.Status = "Simpan";

            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/barang",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasBarang = response.data.result
            })

            $scope.Simpan = function(){
                if($scope.status=="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/barang",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasBarang.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/barang",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/stockbarang/restapi/barang?IdBarang=" + item.IdBarang,
                }).then(function(response){
                    var index = $scope.DatasBarang.indexOf(item);
                    $scope.DatasBarang.splice(index, 1);
                    
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.input = item;
                $scope.status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }

        
        })
    
        //Suplier
        .controller("SuplierController", function ($scope, $http) {
            $scope.DatasSuplier = [];
            $scope.input={};
            $scope.Status = "Simpan";

            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/suplier",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasSuplier = response.data.result
            })

            $scope.Simpan = function(){
                if($scope.status=="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/suplier",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasSuplier.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/suplier",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/stockbarang/restapi/suplier?IdSuplier" + item.IdSuplier,
                }).then(function(response){
                    var index = $scope.DatasSuplier.indexOf(item);
                    $scope.DatasSuplier.splice(index, 1);
                    
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.input = item;
                $scope.status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }

        
        })

        //Transaksi
        .controller("TransaksiController", function ($scope, $http) {
            $scope.DatasTransaksi = [];
            $scope.DatasBarang = [];
            $scope.SelectBarang = {};
            $scope.DatasSuplier = [];
            $scope.SelectSuplier = {};
            $scope.input={};
            $scope.Status = "Simpan";

            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/transaksi",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasTransaksi = response.data.result
            })

            $scope.Simpan = function(){
                if($scope.status=="Simpan"){
            $scope.input.IdBarang = $scope.SelectBarang.IdBarang;
           $scope.input.IdSuplier = $scope.SelectSuplier.IdSuplier;
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/transaksi",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.IdBarang = $scope.SelectBarang.IdBarang;
                        $scope.input.IdSuplier = $scope.SelectSuplier.IdSuplier;
                        $scope.DatasTransaksi.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $scope.input.IdBarang = $scope.SelectBarang.IdBarang;
                  $scope.input.IdSuplier = $scope.SelectSuplier.IdSuplier;
                    $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/transaksi",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.IdBarang = $scope.SelectBarang.IdBarang;
                       $scope.input.IdSuplier = $scope.SelectSuplier.IdSuplier;
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/stockbarang/restapi/transaksi?NoNota=" + item.NoNota,
                }).then(function(response){
                    var index = $scope.DatasTransaksi.indexOf(item);
                    $scope.DatasTransaksi.splice(index, 1);
                    
                }, function(error){
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetData = function(item){
                $scope.input = item;
                $scope.status = "Update";
                angular.forEach($scope.DatasTransaksi, function (value, key) {
                    if (value.IdBarang == item.IdBarang,
                        value.IdSuplier ==item.IdSuplier){
                        $scope.SelectBarang = value;
                        $scope.SelectSuplier = value; 
                    }
                })
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }

        
        })

        //login
        app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
            $rootScope.title = "Cara Membuat Login Sistem Menggunakan AngularJS";
            
            $scope.formSubmit = function() {
              if(LoginService.login($scope.username, $scope.password)) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
              } else {
                $scope.error = "username dan password yang anda masukan salah !";
              }   
            };
            
          });
})(window.angular);