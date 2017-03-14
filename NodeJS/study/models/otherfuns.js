/**
 * Created by Administrator on 2016/12/15.
 */
/*
 //只支持一个函数
function fun2(res){
    console.log('i am fun2');
    res.write('i am fun2');
}
module.exports = fun2; */
//支持多个函数
module.exports = {
    fun2:function(res){
        console.log('i am fun2');
        res.write('i am fun2');
    },
    fun3:function(res){
        console.log('i am fun3');
        res.write('i am fun3');
    }
}