<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH.'/libraries/API_Controller.php';
class transaksi extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("transaksi_model","transaksiModel");
    }
    public function Gettransaksi(){
        $Output = $this->transaksiModel->Gettransaksi($id);
        if($Output !=null || count($Output)>0){
            $this->api_return(
                [
                    'status' => true,
                    "result" => $Output
                ],
            200);
        }else{
            $this->api_return(
                [
                    'status' => false,
                ],
            400);
        }
     
    }
 Public function Inserttransaksi(){
    $post = $this->input->raw_input_stream;
    $Output = $this->transaksiModel->Inserttransaksi(json_decode($post));
    if ($Output){ 
        $this->api_return(
            [
                'status' => true,
                "result" => $Output
            ],
            200);
        }else{
            $this->api_return(
                [
                    'status' => false,
                ],
            400);
            }
 }
 public function Updatetransaksi()
 {
     $data = json_decode($this->input->raw_input_stream);
     $result = $this->transaksiModel->Updatetransaksi($data);
     if ($result){
         $this->api_return(
             [
                 'status'=>true
             ],
         200);
     }else{
         $this->api_return(
             [
                 'status'=>false
             ],
         400);
     }
 }
public function Deletetransaksi()
{
    $id = $_GET;
    $result = $this->transaksiModel->Deletetransaksi($id);
    if ($result){
        $this->api_return(
            [
                'status'=>true
            ],
        200);
    }else{
        $this->api_return(
            [
                'status'=>false
            ],
        400);
    }
}
}