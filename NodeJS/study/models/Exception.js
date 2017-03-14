/**
 * Created by Administrator on 2017/1/14.
 */
module.exports = {
    expfun:function(flag){
        if(flag==0){
            throw '我是例外';
        }
        return 'success';
    }
};