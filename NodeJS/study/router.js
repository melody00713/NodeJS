/**
 * Created by Administrator on 2016/12/15.
 */
var optfile = require('./models/optfile');
var url = require('url');
var querystring = require('querystring');
function getRecall(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    function recall(data){
        res.write(data);
        res.end('');
    }
    return recall;
}
module.exports = {
    login:function(req,res){
        //function recall(data){//闭包  储存response
        //    res.write(data);
        //    res.end('');
        //}
        //--------get方式接收参数----------
        /*var rdata = url.parse(req.url,true).query;
        console.log(rdata);
        if(rdata['email']!=undefined){
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        }*/
        //--------post方式接收参数----------
        var post = ''; //定义了一个post变量，用于暂存请求体的信息
        req.on('data',function(chunk){//通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            post += chunk;
        });
        //----------注意异步----------
        req.on('end',function(){//在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            post = querystring.parse(post);
            //console.log('email:'+post['email']+'\n');
            //console.log('pwd:'+post['pwd']+'\n');
            var arr = ['email','pwd'];
            function recall(data){
                var dataStr = data.toString();
                for(var i = 0;i<arr.length;i++){
                    var re = new RegExp("{"+arr[i]+"}",'g');
                    dataStr = dataStr.replace(re,post[arr[i]]);
                };
                res.write(dataStr);
                res.end('');
            }
            //var recall = getRecall(req,res);
            optfile.readfile('./views/login.html',recall);
        });
        //var recall = getRecall(req,res);
        //optfile.readfile('./views/login.html',recall);
        //res.write('i am login');
    },
    regist:function(req,res){
        //function recall(data){//闭包  储存response
        //    res.write(data);
        //    res.end('');
        //}
        var recall = getRecall(req,res);
        optfile.readfile('./views/regist.html',recall);
        res.write('i am regist');
    },
    writefile:function(req,res){
        function recall(data){//闭包  储存response
            res.write(data);
            res.end('');
        }
        optfile.writefile('./views/one.text','今天阳光灿烂',recall);
    },
    writeFileSync:function(req,res){
        optfile.writeFileSync('./views/one.text','今天乌云密布');
        res.end('');
    },
    showimg:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/pig.png',res);
    }
};