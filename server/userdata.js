/*
存储数据，处理函数
*/


var fs = require("fs")  // 文件读写操作

// 用户数据
const date = {
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

module.exports = { date, log };
