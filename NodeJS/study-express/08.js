var express = require('express');
var app = express();
app.use("/", function (req,res,next) {
   console.log(new Date() + "");
    next();
});
app.use("/admin", function (req,res) {
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    console.log(req.path);
   res.send('hello');
});
app.listen(3000);