var express = require("express");
var app = express(); // tao 1 ung dung tu express module
var port = 5000;
app.listen(port,function (){
    console.log("Server is running....");
});
// cap quyen truy cap cac file static (css, img, jquery...)
app.use(express.static("public"));

// routing - bo dinh tuyen (nhan vien cua van phong)
app.get("/",function (req,res){ // trang chu
    // res.send("<html><head><title</head></html>"); // html- chỉ là 1 chuỗi đối với máy chủ
    res.sendFile(__dirname+"/public/demobootstrap.html");  //__dirname -> xuất cho chúng ta 1 chuỗi đường dẫn chính xác trên máy tính đến thư mục này
});

app.get("/ke-toan",function (req,res){
    // res.send("Xin chao, vui long nop tien..");
    res.sendFile(__dirname+"/public/assignment3.html");
});