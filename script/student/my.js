$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("name1").innerHTML= "姓名：" + data.name
    document.getElementById("number1").innerHTML= "学号：" + data.number 

    document.getElementById("pageContent").style.display = "block";
})
