const express = require('express');
const app = express();
const port = 3000;

const cors = require("cors");
var fs = require("fs")  // 文件读写操作

let date = new Date().toLocaleString('zh-CN')
const dateObject = new Date(date);

// const user = require( "./userdata" );


// 用户数据
const userdate = {
  numbers: '',          // 学号
  names: '',            // 姓名
  sex: '男',            // 性别
  college: '2025-机电工程学院', // 学院
  classes: '25汽修1班', // 班级
  teacher: '轩冠鹏',     // 辅导员
  time1s: '',           // 请假开始日期
  time2s: '',           // 请假截至日期
  time3s: '',           // 假条发起时间
  time4s: '',           // 假条通过时间
  cause: '',            // 请假原因
  Radio_Leave_Type: '', // 请假类型
  Leave_School: '',     // 是否离校
  Leave_City: '',       // 是否离开本市
  telephone: '',        // 联系电话
  Night_School: '',     // 夜晚是否在校
  Eliminate: '',        // 销假状态
  picture: ''           // 头像
};

user = userdate



app.use(express.json());
app.post('/api/json', (req, res) => {
    res.json({ message: '数据接收成功', received: req.body });
    if (req.body.number != '') user.numbers = req.body.number;
    if (req.body.name != '') user.names = req.body.name;
    if (req.body.sex === "男" || req.body.sex === "女") user.sex = req.body.sex;
    if (req.body.college != '') user.college = req.body.college;
    if (req.body.classes != '') user.classes = req.body.classes;
    if (req.body.teacher != '') user.teacher = req.body.teacher;
    if (req.body.time1 != '') user.time1s = req.body.time1;
    if (req.body.time2 != '') user.time2s = req.body.time2;
    if (req.body.time3 != '') user.time3s = req.body.time3;
    if (req.body.time4 != '') user.time4s = req.body.time4;
    if (req.body.cause != '') user.cause = req.body.cause;
    if (req.body.Radio_Leave_Type != '') user.Radio_Leave_Type = req.body.Radio_Leave_Type;
    if (req.body.Leave_School != '') user.Leave_School = req.body.Leave_School;
    if (req.body.Leave_City != '') user.Leave_City = req.body.Leave_City;
    if (req.body.telephone != '') user.telephone = req.body.telephone;
    if (req.body.Night_School != '') user.Night_School = req.body.Night_School;
    if (req.body.Eliminate != '') user.Eliminate = req.body.Eliminate;
    if (req.body.picture != '') user.picture = req.body.picture;
    time();
  // head_picture(); // 前端是否有头像传入
   console.log(req.body)
  //  user.log( `${date}：`+ `JSON{ 学号:${numbers} 姓名:${names} 开始:${time1s} 截至:${time2s} 批准:${time3s}} 类型:${Radio_Leave_Type}} 是否离校:${Leave_School}} 是否离开本市:${Leave_City}} 联系电话:${telephone}} 事由说明:${cause}} 晚间是否在校:${Night_School}}`)
});

app.post('/api/jpg/json', (req, res) => {
    picture  = req.body.picture
});

// 处理时间修改字符
function time(){
  let isoStr1 = user.time1s
  let isoStr2 = user.time2s;
  let isoStr3 = user.time3s;
  let isoStr4 = user.time4s;
  let readable1 = isoStr1.replace('T', ' ');
  let readable2 = isoStr2.replace('T', ' ');
  let readable3 = isoStr3.replace('T', ' ');
  let readable4 = isoStr4.replace('T', ' ');
  user.time1s = readable1;
  user.time2s = readable2;
  user.time3s = readable3;
  user.time4s = readable4;
}




app.use(
  cors({
    origin: "*",
    methods: ['GET' , 'POST']
  })
);


app.get('/api',
  (request,response) => {
    response.json(
      {
        "number":user.numbers,
        "name":user.names,
        "sex":user.sex,
        "college":user.college,
        "classes":user.classes,
        "teacher":user.teacher,
        "time1":user.time1s,
        "time2":user.time2s,
        "time3":user.time3s,   // 假条发起时间
        "time4":user.time4s,   // 假条通过时间
        "cause":user.cause,
        "Radio_Leave_Type":user.Radio_Leave_Type,
        "Leave_City":user.Leave_City,
        "Leave_School":user.Leave_School,
        "telephone":user.telephone,
        "Night_School":user.Night_School,
        "Eliminate":user.Eliminate,
        "picture":user.picture
      }
    );
  });

// app.get('/api/jpg',
//   (request,response) => {
//     response.json(
//       {
//         "picture":picture
//       }
//     );
//   });


// 启动服务
app.listen(port, () => {
  console.log(`接口服务已启动，访问地址：http://localhost:${port}`);
  log(`${date}：` + `接口服务已启动，访问地址：http://localhost:${port}`)
});


// 有头像写入保存为jpg格式
// function head_picture(P){
//   if(P){
//     fs.appendFile( `./jpg/picture/picture.jpg`, a + `\n` , (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//             return;
//         }
//         console.log('picture数据已写入');
//     });
//   }
//   return;
// }


// 保存日志
function log(a){
  fs.appendFile( `/var/log/student.log`, a + `\n` , (err) => {
      if (err) {
          console.error('Error writing file:', err);
          return;
      }
      console.log('File written successfully');
  });
}
