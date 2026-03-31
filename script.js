document.getElementById('userForm').addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取表单数据
    const number = document.getElementById('number').value;
    const name = document.getElementById('name').value;

    const time1s = document.getElementById('time1').value;
    const time1_1s = document.getElementById('time1-1').value;
    time1ss = time1s + " " + time1_1s

    const time2s = document.getElementById('time2').value;
    const time2_2s = document.getElementById('time2-2').value;
    time2ss = time2s + " " + time2_2s

    const time3s = document.getElementById('time3').value;
    const time3_3s = document.getElementById('time3-3').value;
    time3ss = time3s + " " + time3_3s

    const cause = document.getElementById('cause').value;

    // 创建JSON对象
    const data = {
        number: number,
        name: name,
        time1: time1ss,
        time2: time2ss,
        time3: time3ss,
        cause: cause
    };

    // 将数据转换为JSON字符串
    const jsonData = JSON.stringify(data);

    // 发送JSON数据到服务器
    fetch("https://xctc.drlihui.eu.org/api/json ",{
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
    });

    // 清除表单内容
    function clear(){
        document.getElementById('number').value ="";
        document.getElementById('name').value ="";

        document.getElementById('time1').value ="";
        document.getElementById('time1-1').value ="";

        document.getElementById('time2').value ="";
        document.getElementById('time2-2').value ="";
        document.getElementById('time3').value ="";
        document.getElementById('time3-3').value ="";

        document.getElementById('cause').value ="";
        }
});