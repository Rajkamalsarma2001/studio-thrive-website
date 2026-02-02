<?php
$client = preg_replace("/[^a-zA-Z0-9_-]/","", $_POST['client']);
$type   = $_POST['type'];

if($type=="completed" || $type=="ongoing"){
    $targetDir = "../img/portfolio/".$type."/";
}
else{
    $targetDir = "../uploads/clients/".$client."/";
}

if(!is_dir($targetDir)){
    mkdir($targetDir, 0777, true);
}

$fileName = basename($_FILES["file"]["name"]);
$targetFile = $targetDir . time()."_".$fileName;

if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)){
    echo "Upload successful <br><a href='upload.html'>Go Back</a>";
}else{
    echo "Upload failed";
}
?>
