/**
 * Created by Administrator on 2017/1/14.
 */
//function oneFun(){
//    /*setTimeout(function(){
//
//    },1000);*/
//    var ii=0;
//    setInterval(function(){
//        console.log('aaa='+new Date());
//        ii++;
//        if(ii==3){
//            clearInterval(this);
//        }
//    },1000);
//    console.log('oneFun');
//}
//function twoFun(){
//    var jj=0;
//    setInterval(function(){
//        console.log('bbb='+new Date());
//        jj++;
//        if(jj==3){
//            clearInterval(this);
//        }
//    },1000);
//    console.log('twoFun');
//}
//oneFun();
//twoFun();
//console.log('主进程执行完毕');


//1.串行无关联：async.series(tasks,callback);
//多个函数依次执行,之间没有数据交换,其中一个函数出错，后续函数不再执行
//async.series({
//    one: function(callback){
//        callback(null, 1);
//    },
//    two: function(callback){
//        callback(null, 2);
//    }
//},function(err, results) {
//    console.log(results);
//});
//2.并行无关联：async.parallel(tasks,callback);
//多个函数并行执行，最后汇总结果,如果某一个流程出错就將后续流程中的回调不执行
//async.parallel({
//    one: function(callback){
//        callback(null, 1);
//    },
//    two: function(callback){
//        callback(null, 2);
//    }
//},function(err, results) {
//    console.log(results);
//});
//3.串行有关联:waterfall
//每一步执行时需要由上一步执行的结果当做参数.所以每一步必须串行等待
//async.waterfall([
//    function (done) {
//
//        done(null, 'one');
//    },
//    function (onearg, done) {
//
//        done(null, onearg + '| two');
//    },
//    function (twoarg, done) {
//
//        done(null, twoarg + '| three');
//    },
//    function (threearg, done) {
//
//        done(null, threearg + '| four');
//    }
//], function (error, result) {
//    console.log(result);
//    console.timeEnd('waterfall');
//})
//var async = require('async');
//function exec(){
//    async.parallel({
//        one:function(done){
//            var jj=0;
//            setInterval(function(){
//                console.log('aaa='+new Date());
//                jj++;
//                if(jj==3){
//                    clearInterval(this);
//                    done(null,'one完畢');
//                }
//            },1000);
//        },
//        two:function(done){
//            var ii=0;
//            setInterval(function(){
//                console.log('bbb='+new Date());
//                ii++;
//                if(ii==3){
//                    clearInterval(this);
//                    done(null,'two完畢');
//                }
//            },1000);
//        }
//    },function(err,rs){
//        console.log(err);
//        console.log(rs);
//    });
//}
function exec(){
    async.waterfall([
        function(done){
            var jj=0;
            setInterval(function(){
                console.log('aaa='+new Date());
                jj++;
                if(jj==3){
                    clearInterval(this);
                    done(null,'one完畢');
                }
            },1000);
        },
        function(perVal,done){
            var ii=0;
            setInterval(function(){
                console.log('bbb='+perVal+new Date());
                ii++;
                if(ii==3){
                    clearInterval(this);
                    done(null,perVal+'two完畢');
                }
            },1000);
        }
    ],function(err,rs){
        console.log(err);
        console.log(rs);
    });
}
exec();
console.log('主进程执行完毕');