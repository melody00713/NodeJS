/**
 * Created by Administrator on 2016/12/15.
 **/
var fs = require('fs');//  操作文件
module.exports = {
    readfileSync:function(path){//同步读文件
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log('sync over');
    },
    readfile:function(path,recall){
        fs.readFile(path,function(err,data){
            if(err){
                console.log('bbbb'+err);
                recall('文件不存在');
            }else{
                recall(data);
            }
        });
        console.log('async over');
    },
    writefile:function(path,data,recall){//异步写文件
        fs.writeFile(path,data,function(err){
            if(err){
                throw err;
            }
            console.log('i am saved');
            recall('写文件成功');
        });
    },
    writeFileSync:function(path,data){//同步写文件
        fs.writeFileSync(path,data);
        console.log('sync write over');
    },
    readImg:function(path,res){//读图片
        fs.readFile(path,'binary',function(err,  filedata)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                res.write(filedata,'binary');
                res.end('');
            }
        });
    }
};