var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return;
    }
    var wenjianjia = [];
    fs.readdir("./album", function (err,files) {
        for(var i = 0;i<files.length;i++){
            fs.stat("./album/"+files[i],function(err,data){
                if (data.isDirectory()) {
                    wenjianjia.push(files[i]);
                    console.log(wenjianjia)
                }
            });
        }
        /*可以使用forEach解决*/
        //files.forEach(function(file){
        //    fs.stat("./album/"+file,function(err,data){
        //        if(data.isDirectory()){
        //            wenjianjia.push(file);
        //        }
        //        console.log(wenjianjia)
        //    });
        //})

        /*可以使用let解决*/
        //for(let i = 0;i<files.length;i++){
        //    fs.stat("./album/"+files[i],function(err,data){
        //        if (data.isDirectory()) {
        //            wenjianjia.push(files[i]);
        //            console.log(wenjianjia)
        //        }
        //    });
        //}
    });
});
server.listen(3000,"127.0.0.1");