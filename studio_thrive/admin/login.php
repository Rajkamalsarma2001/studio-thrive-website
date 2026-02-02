<!DOCTYPE html>
<html>
<head>
  <title>Admin Login</title>
  <style>
    body{font-family:Arial;background:#f4f4f4}
    .box{width:300px;margin:100px auto;background:#fff;padding:20px}
    input,button{width:100%;padding:10px;margin:8px 0}
  </style>
</head>
<body>
  <div class="box">
    <h3>Admin Login</h3>
    <input type="password" id="pass" placeholder="Password">
    <button onclick="login()">Login</button>
  </div>

<script>
function login(){
  if(document.getElementById('pass').value==="admin@123"){
    window.location="upload.html";
  }else{
    alert("Wrong password");
  }
}
</script>
</body>
</html>
