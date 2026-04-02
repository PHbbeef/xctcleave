document.getElementById('upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                var canvas = document.getElementById('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL('image/png'); // 或者 'image/jpeg'
                console.log(dataURL); // 输出Base64编码的字符串

                const data = {
                    picture:dataURL
                };

                const jsonData = JSON.stringify(data);

                fetch("https://xctc.drlihui.eu.org/api/jpg/json",{
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
                    alert("图片已上传")
                })
                .catch((error) => {
                    console.error('出错:', error);
                    alert("图片上传失败联系管理员")
                    clear();
                });

            };
            img.src = event.target.result; // 设置img的src为读取的结果
        };
        reader.readAsDataURL(file); // 读取文件内容为DataURL
    }
});