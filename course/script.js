document.getElementById('userForm').addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取表单数据

    /*
        Radio_Leave_Type    请假类型
        Leave_School        是否离校
        Leave_City          是否离开本市
        telephone           联系电话
        Night_School        夜晚是否在校

    */

    // 获取 请假类型
    var Radio_Leave_Type = document.getElementsByName("Radio_Leave_Type"); 
    for(var i=0; i<Radio_Leave_Type.length; i++){
        if(Radio_Leave_Type[i].checked){
            Radio_Leave_Type = Radio_Leave_Type[i].value;
        }
    }

    // 获取是否离校
    var Leave_School = document.getElementsByName("Leave_School"); 
    for(var i=0; i<Leave_School.length; i++){
        if(Leave_School[i].checked){
            Leave_School = Leave_School[i].value;
        }
    }

    // 是否离开本市
    var Leave_City = document.getElementsByName("Leave_City"); 
    for(var i=0; i<Leave_City.length; i++){
        if(Leave_City[i].checked){
            Leave_City = Leave_City[i].value;
        }
    }

    // 晚间是否在校
    var Night_School = document.getElementsByName("Night_School"); 
    for(var i=0; i<Night_School.length; i++){
        if(Night_School[i].checked){
            Night_School = Night_School[i].value;
        }
    }


    // 获取姓名
    const name = document.getElementById('name').value;
    // 获取学号
    const number = document.getElementById('number').value;
    // 获取手机号
    const telephone = document.getElementById('telephone').value;
    //  事由说明
    const cause = document.getElementById('cause').value;
    // 开始时间
    const time1s = document.getElementById('time1').value;
    // 截至时间
    const time2s = document.getElementById('time2').value;
    // 发起时间
    const time3s = document.getElementById('time3').value;
    // 通过时间
    const time4s = document.getElementById('time4').value;
    // 假条状态
    const Eliminate = "false"

    // document.getElementById('image').addEventListener('change', function (event) {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = function (e) {
    //         const base64String = e.target.result;
    //         document.getElementById('image').src = base64String;
    //         console.log(base64String); // Outputs the Base64 string
    //     };
    //     reader.readAsDataURL(file);
    // }
    // });


    // 创建JSON对象
    const data = {
        number: number,
        name: name,
        time1: time1s,
        time2: time2s,
        time3: time3s,
        time4: time4s,
        cause: cause,
        Radio_Leave_Type:Radio_Leave_Type,
        Leave_School:Leave_School,
        Leave_City:Leave_City,
        telephone:telephone,
        Night_School:Night_School,
        Eliminate:Eliminate,
        picture:dataURL
    };

    // 将数据转换为JSON字符串
    const jsonData = JSON.stringify(data);

    // 发送JSON数据到服务器
    fetch("https://xctc.drlihui.eu.org/api/json",{
        method: 'POST', // 使用 POST 请求
        headers: {
            'Content-Type': 'application/json' // 指定内容类型为 JSON
        },
        body: jsonData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('网络响应错误');
        }
        return response.json();
    })
    .then(data => {
        console.log('成功:', data);
        clear();
        alert("数据已修改")
    })
    .catch((error) => {
        console.error('出错:', error);
        alert("错误联系管理员")
        clear();
    });

    // 清除表单内容
    function clear(){
            document.getElementById('number').value ="";
            document.getElementById('name').value ="";
            document.getElementById('telephone').value = "";
            document.getElementById('cause').value = "";
            document.getElementById('time1').value = "";
            document.getElementById('time2').value = "";
            document.getElementById('time3').value = "";
            document.getElementById('time4').value = "";

            document.getElementsByName = "";
            document.getElementsByName = "";
            document.getElementsByName = "";
            document.getElementsByName = "";
        }
});