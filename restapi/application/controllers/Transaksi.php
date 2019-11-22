<?php defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';
class Transaksi extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("Transaksi_model", "TransaksiModel");
    }

    public function getTransaksi(){
        $id = $_GET;
        $result = $this->TransaksiModel->get($id);
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

    public function insertTransaksi(){
        $pos = $this->input->raw_input_stream;
        $data = $this->TransaksiModel->insert(json_decode($pos));
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

    public function updateTransaksi(){
        $pos =json_decode($this->input->raw_input_stream);
        $data = $this->TransaksiModel->update($pos);
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

    public function deleteTransaksi(){
        $id = $_GET;
        $result = $this->TransaksiModel->delete($id);
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