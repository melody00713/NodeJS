/*
    process对象是全局变量，提供一系列属性，用于描述当前node进程状态的对象，用于返回系统的信息
    不比通过require的命令加载，该对象部署了EventEmitter(事件发送器)接口
*/
//console.log(process.argv);
//process.stdout.write(''+process.argv);
//process.stdin.resume();
//process.stdin.on('data',function(data){
//    process.stdout.write('read from console: ' + data.toString());
//});
//console.log(process.installPrefix);//node的安装路径的前缀
//console.log(process.pid);//当前进程的进程号
//console.log(process.platform);//当前系统平台
//console.log(process.title);
//console.log(process.version);//node版本
/*process 事件*/
//process.on('exit',code=>
//    console.log('exiting with code:' + code));
//process.on('beforeExit',function(code){
//    console.log('beforeExit'+code);
//});
//process.exit();
//process.on('beforeExit',function(){
//    console.log(111)
//})
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('./views/one.text').pipe(zlib.createGzip()).pipe(process.stdout);