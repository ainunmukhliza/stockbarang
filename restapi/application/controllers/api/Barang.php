<?php defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';
class Barang extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("Barang_model", "BarangModel");
    }

    public function getBarang(){
        $id = $_GET;
        $result = $this->BarangModel->get($id);
        if(!empty($result)){
            $this->api_return(
                [
                    "data" => $result
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "data" => "Data Kosong"
                ], 400
            );
        }
    }

    public function insertBarang(){
        $pos = $this->input->raw_input_stream;
        $data = $this->BarangModel->insert(json_decode($pos));
        if($data){
            $this->api_return(
                [
                    'status' => true
                ],
        200);
        }else{
            $this->api_return(
                [
                    'status' => false
                ],
        400);
        }
    }

    public function updateBarang(){
        $put =json_decode($this->input->raw_input_stream);
        $data = $this->BarangModel->update($put);
        if($data){
            $this->api_return(
                [
                    'status' => true
                ],
        200);
        }else{
            $this->api_return(
                [
                    'status' => false
                ],
        400);
        }
    }

    public function deleteBarang(){
        $id = $_GET;
        $result = $this->BarangModel->delete($id);
        if($result){
            $this->api_return(
                [
                    "data" => $result
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "data" => $result
                ], 400
            );
        }
    }
}