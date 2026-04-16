$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("name2").innerHTML= "当前账号：" + data.name +"(" + data.number + ")";   // 姓名加学号
    document.getElementById("college_teacher").innerHTML= data.college + "-" + data.teacher;
    document.getElementById("classes").innerHTML= data.classes

    document.getElementById("pageContent").style.display = "block";
})
