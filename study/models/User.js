/**
 * Created by Administrator on 2016/12/15.
 */
function User(id,name,age){
    this.id = id;//成员变量
    this.name = name;
    this.age = age;
    this.enter = function(){//成员方法
        console.log(this.name+'进入图书馆');
    }
}
module.exports = User;//导出