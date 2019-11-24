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
            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/barang",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasBarang = response.data.result
            })
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
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/transaksi",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Nama = $scope.SelectedBarang.Nama;
                        $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                        $scope.DatasTransaksi.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                     $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/transaksi",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Nama = $scope.SelectedBarang.Nama;
                       $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
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
                    if (value.Nama == item.Nama,
                        value.Nama_Suplier ==item.Nama_Suplier){
                        $scope.SelectedBarang = value;
                        $scope.SelectedSuplier = value; 
                    }
                })
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }
        })

//Login
        .controller("UserController", function ($scope, $http) {
            $scope.input={};
            $scope.Login= function(){
                var Url = "http://localhost/stockbarang/restapi/User?username="+$scope.input.username+"&password="+$scope.input.password;
                $http({
                    method: "get",
                    url: Url
                }).then(function(response){
                    alert("Sukses Login");
                }, function(error){
                    console.log(error);
                })
            }
})




})(window.angular);