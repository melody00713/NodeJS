/**
 * Created by Administrator on 2016/12/15.
 */
var User = require('./User.js');
function Teacher(id,name,age){
    User.apply(this,[id,name,age]);
    this.teach  =function(res){
        res.write(this.name + '讲课');
    }
}
module.exports = Teacher;
