(function (angular) {
    'use strict'
    angular.module("MyController", [])
        .controller("HomeController", function ($scope, $http) {

        })
        .controller("BarangController", function ($scope, $http) {
            $scope.DatasBarang = [];
            $http({
                method: "GET",
                url: "http://localhost/persediaanbarang/restapi/barang",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasBarang = response.data.data;
            })
            $scope.Simpan = function(){
            if($scope.status="Simpan"){
                $http({
                method: "POST",
                url: "http://localhost/persediaanbarang/restapi/barang",
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
                method: "put",
                url: "http://localhost/persediaanbarang/restapi/barang",
                data: $scope.input,
                header: {
                    "Content-Type": "application/json"
                    }
            }).then(function(response){
                    alert("Berhasil di Diubah")
                    }, function(error){
                    alert("Data Gagal Disimpan");
            })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/Aim/DbKrs/mahasiswa?npm=" + item.npm,
                }).then(function(response){
                    var index = $scope.DatasMahasiswa.indexOf(item);
                    $scope.DatasMahasiswa.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghapus");
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
    
        .controller("SuplierController", function ($scope, $http) {
            $scope.DatasSuplier = [];
            $http({
                method: "GET",
                url: "http://localhost/persediaanbarang/restapi/suplier",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasSuplier = response.data.data;
            }, function (error) {

            })
    $scope.Simpan = function(){
            if($scope.status="Simpan"){
                $http({
                method: "POST",
                url: "http://localhost/persediaanbarang/restapi/suplier",
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
                method: "put",
                url: "http://localhost/persediaanbarang/restapi/suplier",
                data: $scope.input,
                header: {
                    "Content-Type": "application/json"
                    }
            }).then(function(response){
                    alert("Berhasil di Diubah")
                    }, function(error){
                    alert("Data Gagal Disimpan");
            })
                }
                
            }

        })
        .controller("TransaksiController", function ($scope, $http) {
            $scope.DatasTransaksi = [];
            $http({
                method: "GET",
                url: "http://localhost/persediaanbarang/restapi/transaksi",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasTransaksi = response.data.data;
            })
        })
})(window.angular);