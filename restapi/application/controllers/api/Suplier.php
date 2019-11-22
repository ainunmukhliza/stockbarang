<?php defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';
class Suplier extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("Suplier_model", "SuplierModel");
    }

    public function getSuplier(){
        $id = $_GET;
        $result = $this->SuplierModel->get($id);
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

    public function insertSuplier(){
        $pos = $this->input->raw_input_stream;
        $data = $this->SuplierModel->insert(json_decode($pos));
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

    public function updateSuplier(){
        $put =json_decode($this->input->raw_input_stream);
        $data = $this->SuplierModel->update($put);
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

    public function deleteSuplier(){
        $id = $_GET;
        $result = $this->SuplierModel->delete($id);
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