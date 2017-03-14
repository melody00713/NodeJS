var express = require('express');
var app = express();
var router = require('./controller');

//设置模板引擎
app.set('view engine','ejs');

//路由中间件
//静态服务
app.use(express.static('./public'));
app.use(express.static('./uploads'));
//首页
app.get('/', router.showIndex);
app.get('/upload',router.showUp);
app.get('/addNewAlbum',router.addNewAlbum);
app.post('/addNewImage',router.addNewImage);
app.get('/:albumName',router.showAlbum);

//最后的中间件 404
app.use(function (req,res) {
   res.render("err");
});

app.listen(3000);