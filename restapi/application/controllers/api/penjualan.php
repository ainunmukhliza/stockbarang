<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH.'/libraries/API_Controller.php';
class penjualan extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("penjualan_model","penjualanModel");
    }
    public function Getpenjualan(){
        $id=$_GET;
        $Output = $this->penjualanModel->Getpenjualan($id);
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
 Public function Insertpenjualan(){
    $post = $this->input->raw_input_stream;
    $Output = $this->penjualanModel->Insertpenjualan(json_decode($post));
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
 public function Updatepenjualan()
 {
     $data = json_decode($this->input->raw_input_stream);
     $result = $this->penjualanModel->Updatepenjualan($data);
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
public function Deletepenjualan()
{
    $id = $_GET;
    $result = $this->penjualanModel->Deletepenjualan($id);
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