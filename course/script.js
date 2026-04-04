document.getElementById('userForm').addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

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

    // 获取性别
    var sex = document.getElementsByName("sex"); 
    for(var i=0; i<sex.length; i++){
        if(sex[i].checked){
            sex = sex[i].value;
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
    // 学院
    const college = document.getElementById('college').value;
    // 班级
    const classes = document.getElementById('classes').value;
    // 辅导员
    const teacher = document.getElementById('teacher').value;

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

    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if(file){

        const formData = new FormData();
        formData.append('image',file);
        fetch('http://127.0.0.1/img.scdn.io/api/v1.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            console.log(imageUrl)
            data_post(imageUrl)
            
        })
        .catch(error => {
            console.error('图片上传失败:', error);
            alert(失败图片上传)
        });
    }
    else{data_post();}


    function data_post(a){

        // 创建JSON对象
        const data = {
            picture:a,
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
            sex:sex,
            college:college,
            classes:classes,
            teacher:teacher,
            Eliminate:"false"

            // picture:dataURL
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
            alert("数据已修改")
            location.reload()
        })
        .catch((error) => {
            console.error('出错:', error);
            alert("数据错误" + error)
        });
    }
});

document.getElementById('weui-btn weui-btn_primary').addEventListener('click', function() {
    console.log(233)
})