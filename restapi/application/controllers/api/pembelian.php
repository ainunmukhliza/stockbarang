<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH.'/libraries/API_Controller.php';
class pembelian extends API_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model("pembelian_model","pembelianModel");
    }
    public function Getpembelian(){
        $id=$_GET;
        $Output = $this->pembelianModel->Getpembelian($id);
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
 Public function Insertpembelian(){
    $post = $this->input->raw_input_stream;
    $Output = $this->pembelianModel->Insertpembelian(json_decode($post));
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
 public function Updatepembelian()
 {
     $data = json_decode($this->input->raw_input_stream);
     $result = $this->pembelianModel->Updatepembelian($data);
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
public function Deletepembelian()
{
    $id = $_GET;
    $result = $this->pembelianModel->Deletepembelian($id);
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