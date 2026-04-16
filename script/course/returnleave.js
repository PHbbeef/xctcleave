// 假条销假页面

function showAlert() {

    const now = new Date();
    const year = now.getFullYear(); // 获取年份（四位数）
    const month = now.getMonth() + 1; // 获取月份（0-11，需要加1）
    const day = now.getDate(); // 获取日期（1-31）
    const hours = now.getHours(); // 获取小时（0-23）
    const minutes = now.getMinutes(); // 获取分钟（0-59）
    const seconds = now.getSeconds(); // 获取秒数（0-59）
    const time5 = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


    const data = {
        time5s:time5,
        Eliminate:"true"
    };

    const jsonData = JSON.stringify(data);

    // 发送JSON数据到服务器
    fetch("http://127.0.0.1/api/Eliminate",{
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
    })
    .catch((error) => {
        console.error('出错:', error);
        alert("数据错误" + error)
    });
    alert("销假已完成")
    location.reload()

}