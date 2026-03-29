const express = require('express');
const app = express();
const port = 3000;
var fs = require("fs")

const cors = require("cors");

let date = new Date().toLocaleString('zh-CN')
const dateObject = new Date(date);

app.use(express.json());
app.post('/api/json', (req, res) => {
    res.json({ message: '数据接收成功', received: req.body });
    numbers = req.body.number
    names = req.body.name
    time1s = req.body.time1
    time2s = req.body.time2
    time3s = req.body.time3
  console.log(req.body)
  log( `${date}：`+ `JSON{ numbers:${numbers} names:${names} time1s:${time1s} time2s:${time2s} time3s:${time3s}}`)
});


app.use(
  cors({
    origin: "*",
    methods: ['GET' , 'POST']
  })
);

// 学号
var numbers = [
  '',
];

// 姓名
var names = [
  '',
];

// 请假开始日期
var time1s = [
  '',
];

// 请假结束日期
var time2s = [
  '',
];

// 批准时间
var time3s = [
  '',
];


// 学号
app.get('/api',
  (request,response) => {
    response.json(
      {
        "number":numbers,
        "name":names,
        "time1":time1s,
        "time2":time2s,
        "time3":time3s,
      }
    );
  });


// 启动服务
app.listen(port, () => {
  console.log(`接口服务已启动，访问地址：http://localhost:${port}`);
  log(`${date}：` + `接口服务已启动，访问地址：http://localhost:${port}`)
});


function log(a){
  fs.appendFile( `log`, a + `\n` , (err) => {
      if (err) {
          console.error('Error writing file:', err);
          return;
      }
      console.log('File written successfully');
  });
}
