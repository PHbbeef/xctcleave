$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("college_teacher").innerHTML= data.college + "-" + data.teacher;

    document.getElementById("pageContent").style.display = "block";
})