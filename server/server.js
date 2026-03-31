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
    time4s = req.body.time4
    cause  = req.body.cause
    Radio_Leave_Type = req.body.Radio_Leave_Type
    Leave_School = req.body.Leave_School
    Leave_City = req.body.Leave_City
    telephone =  req.body.telephone
    Night_School = req.body.Night_School
   time();
   console.log(req.body)
  log( `${date}：`+ `JSON{ 学号:${numbers} 姓名:${names} 开始:${time1s} 截至:${time2s} 批准:${time3s}} 类型:${Radio_Leave_Type}} 是否离校:${Leave_School}} 是否离开本市:${Leave_City}} 联系电话:${telephone}} 事由说明:${cause}} 晚间是否在校:${Night_School}}`)
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

// 假条发起时间
var time3s = [
  '',
];

// 假条通过时间
var time4s = [
  '',
];


// 请假原因
var cause = [
  '',
];

// 请假类型
var Radio_Leave_Type = [
  '',
];

// 是否离校
var Leave_School = [
  '',
];

// 是否离开本市
var Leave_City = [
  '',
];

// 联系电话
var telephone = [
  '',
];

// 夜晚是否在校
var Night_School = [
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
        "time3":time3s,   // 假条发起时间
        "time4":time4s,   // 假条通过时间
        "cause":cause,
        "Radio_Leave_Type":Radio_Leave_Type,
        "Leave_City":Leave_City,
        "Leave_School":Leave_School,
        "telephone":telephone,
        "Night_School":Night_School
      }
    );
  });


// 启动服务
app.listen(port, () => {
  console.log(`接口服务已启动，访问地址：http://localhost:${port}`);
  log(`${date}：` + `接口服务已启动，访问地址：http://localhost:${port}`)
});


function log(a){
  fs.appendFile( `/var/log/student.log`, a + `\n` , (err) => {
      if (err) {
          console.error('Error writing file:', err);
          return;
      }
      console.log('File written successfully');
  });
}

function time(){
  let isoStr1 = time1s
  let isoStr2 = time2s;
  let isoStr3 = time3s;
  let isoStr4 = time4s;
  let readable1 = isoStr1.replace('T', ' ');
  let readable2 = isoStr2.replace('T', ' ');
  let readable3 = isoStr3.replace('T', ' ');
  let readable4 = isoStr4.replace('T', ' ');
  time1s = readable1;
  time2s = readable2;
  time3s = readable3;
  time4s = readable4;
}
