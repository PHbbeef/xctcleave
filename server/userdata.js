/*
存储数据，处理函数
*/





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





// 处理时间修改字符
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
