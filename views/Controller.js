(function (angular) {
    'use strict'
    angular.module("MyController", [])
        .controller("HomeController", function ($scope, $http) {

        })

        //controller Login
        .controller("UserController", function ($scope, $http, $window) {
            $scope.input = {};
            $scope.Login = function () {
                var Url = "http://localhost/stockbarang/restapi/User?username=" + $scope.input.username + "&password=" + $scope.input.password;
                $http({
                    method: "get",
                    url: Url
                }).then(function (response) {
                    $window.sessionStorage.setItem("username", response.data.data.data.username);
                    $window.sessionStorage.setItem("nama", response.data.data.data.nama);
                    window.location.href = "index.html"
                }, function (error){
                    $window.sessionStorage.setItem("username", response.data.data.data.username);
                    $window.sessionStorage.setItem("nama", response.data.data.data.nama);
                })
            }
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



        //Pembelian
        .controller("PembelianController", function ($scope, $http) {
            $scope.DatasPembelian = [];
            $scope.DatasBarang = [];
            $scope.SelectBarang = {};
            $scope.DatasSuplier = [];
            $scope.SelectSuplier = {};
            $scope.input={};
            $scope.Status = "Simpan";

            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/pembelian",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasPembelian = response.data.result
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
                    $scope.input.Kode = $scope.SelectedBarang.Kode;
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/pembelian",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Kode = $scope.SelectedBarang.Kode;
                        $scope.input.Nama = $scope.SelectedBarang.Nama;
                        $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                        $scope.DatasPembelian.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $scope.input.Kode = $scope.SelectedBarang.Kode;
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                     $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/pembelian",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Kode = $scope.SelectedBarang.Kode;
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
                    url: "http://localhost/stockbarang/restapi/pembelian?Id=" + item.Id,
                }).then(function(response){
                    var index = $scope.DatasPembelian.indexOf(item);
                    $scope.DatasPembelian.splice(index, 1);
                    
                }, function(error){
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetData = function(item){
                $scope.input = item;
                $scope.status = "Update";
                angular.forEach($scope.DatasPembelian, function (value, key) {
                    if (value.Kode == item.Kode,
                        value.Nama == item.Nama,
                        value.Nama_Suplier ==item.Nama_Suplier){
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                        $scope.SelectedSuplier = value; 
                    }
                })
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }
        })




        //Penjualan
        .controller("PenjualanController", function ($scope, $http) {
            $scope.DatasPenjualan = [];
            $scope.input={};
            $scope.DatasBarang = [];
            $scope.SelectBarang = {};
            $scope.input.Total = 0;
            $scope.input.JumlahBarang = 0;
            $scope.Status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/penjualan",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasPenjualan = response.data.result
            })
            $scope.TampilHarga = function(){
                $scope.input.Harga = parseInt($scope.SelectedBarang.Harga);
                $scope.input.Total = parseInt($scope.input.Harga)*parseInt($scope.input.JumlahBarang);
            }
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
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Type = $scope.SelectedBarang.Type;
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/penjualan",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Nama = $scope.SelectedBarang.Nama;
                        $scope.input.Type = $scope.SelectedBarang.Type;
                        $scope.DatasPenjualan.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Type = $scope.SelectedBarang.Type;
                     $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/penjualan",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Nama = $scope.SelectedBarang.Nama;
                        $scope.input.Type = $scope.SelectedBarang.Type;
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/stockbarang/restapi/penjualan?Id_penjualan=" + item.Id_penjualan,
                }).then(function(response){
                    var index = $scope.DatasPenjualan.indexOf(item);
                    $scope.DatasPenjualan.splice(index, 1);
                    
                }, function(error){
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetData = function(item){
                $scope.input = item;
                $scope.status = "Update";
                angular.forEach($scope.DatasPenjualan, function (value, key) {
                    if (value.Nama == item.Nama,
                        value.Type == item.Type){
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                    }
                })
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }
        })





        //Laporan
         .controller("LaporanController", function ($scope, $http) {
            $scope.DatasLaporan = [];
            $scope.input={};
            $scope.DatasBarang = [];
            $scope.SelectBarang = {};
            $scope.DatasSuplier = [];
            $scope.SelectSuplier = {};
            $scope.DatasPembelian = [];
            $scope.SelectPembelian = {};
            $scope.DatasPenjualan = [];
            $scope.SelectPenjualan = {};
            Sscope.input.Sisa = 0;
            Sscope.input.BarangKeluar = 0;
            $scope.Status = "Simpan";

            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/laporan",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasLaporan = response.data.result
            })
            $scope.TampilHarga = function(){
                $scope.input.Barang_Masuk = parseInt($scope.SelectedPembelian.Barang_Masuk);
                $scope.input.Total = parseInt($scope.input.Barang_Masuk)-parseInt($scope.input.Barang_Keluar);
            }
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
            $http({
                method: "get",
                url: "http://localhost/stockbarang/restapi/pembelian",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasPembelian = response.data.result
            })
            $scope.Simpan = function(){
                if($scope.status=="Simpan"){
                    $scope.input.Kode = $scope.SelectedBarang.Kode;
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Merk = $scope.SelectedBarang.Merk;
                    $scope.input.Type = $scope.SelectedBarang.Type;
                    $scope.input.Satuan = $scope.SelectedBarang.Satuan;
                    $scope.input.Harga = $scope.SelectedBarang.Harga;
                    $scope.input.Tanggal = $scope.SelectedPenjualan.Tanggal;
                    $scope.input.NoNota = $scope.SelectedPenjualan.NoNota;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                    $scope.input.Barang_Masuk = $scope.SelectedBarang.Barang_Masuk;
                    $http({
                        method: "POST",
                        url: "http://localhost/stockbarang/restapi/penjualan",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                    $scope.input.Kode = $scope.SelectedBarang.Kode;
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Merk = $scope.SelectedBarang.Merk;
                    $scope.input.Type = $scope.SelectedBarang.Type;
                    $scope.input.Satuan = $scope.SelectedBarang.Satuan;
                    $scope.input.Harga = $scope.SelectedBarang.Harga;
                    $scope.input.Tanggal = $scope.SelectedPenjualan.Tanggal;
                    $scope.input.NoNota = $scope.SelectedPenjualan.NoNota;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                    $scope.input.Barang_Masuk = $scope.SelectedBarang.Barang_Masuk;
                        $scope.DatasPenjualan.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $scope.input.Kode = $scope.SelectedBarang.Kode;
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Merk = $scope.SelectedBarang.Merk;
                    $scope.input.Type = $scope.SelectedBarang.Type;
                    $scope.input.Satuan = $scope.SelectedBarang.Satuan;
                    $scope.input.Harga = $scope.SelectedBarang.Harga;
                    $scope.input.Tanggal = $scope.SelectedPenjualan.Tanggal;
                    $scope.input.NoNota = $scope.SelectedPenjualan.NoNota;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                    $scope.input.Barang_Masuk = $scope.SelectedBarang.Barang_Masuk;
                    $http({
                        method: "PUT",
                        url: "http://localhost/stockbarang/restapi/laporan",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.input.Kode = $scope.SelectedBarang.Kode;
                    $scope.input.Nama = $scope.SelectedBarang.Nama;
                    $scope.input.Merk = $scope.SelectedBarang.Merk;
                    $scope.input.Type = $scope.SelectedBarang.Type;
                    $scope.input.Satuan = $scope.SelectedBarang.Satuan;
                    $scope.input.Harga = $scope.SelectedBarang.Harga;
                    $scope.input.Tanggal = $scope.SelectedPenjualan.Tanggal;
                    $scope.input.NoNota = $scope.SelectedPenjualan.NoNota;
                    $scope.input.Nama_Suplier = $scope.SelectedSuplier.Nama_Suplier;
                    $scope.input.Barang_Masuk = $scope.SelectedBarang.Barang_Masuk;
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/stockbarang/restapi/laporan?Id=" + item.Id,
                }).then(function(response){
                    var index = $scope.DatasLaporan.indexOf(item);
                    $scope.DatasLaporan.splice(index, 1);
                    
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.input = item;
                $scope.status = "Update";
                angular.forEach($scope.DatasPenjualan, function (value, key) {
                    if (value.Kode == item.Kode,
                        value.Nama == item.Nama,
                        value.Merk == item.Merk,
                        value.Type == item.Type,
                        value.Satuan == item.Satuan,
                        value.Harga == item.Harga,
                        value.Tanggal == item.Tanggal,
                        value.NoNota == item.NoNota,
                        value.Nama_Suplier == item.Nama_Suplier,
                        value.Barang_Masuk == item.Barang_Masuk,
                        value.Barang_Keluar == item.Barang_Keluar){
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                        $scope.SelectedBarang = value;
                        $scope.SelectedPenjualan = value;
                        $scope.SelectedPenjualan = value;
                        $scope.SelectedSuplier = value;
                        $scope.SelectedPembelian = value;
                        $scope.SelectedPenjualan = value;
                    }
                })
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
            }

        
        })

})(window.angular);