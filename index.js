//웹서버를 실행하는 코드
let express = require('express');
let app = express();

//router/main.js 파일 수행
let router = require('./router/main')(app);

//포트번호는 3000번 할당
let port = process.env.PORT || 3000;


//public 폴더랑 views 폴더를 사용할거다.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

//웹서버를 구동
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
