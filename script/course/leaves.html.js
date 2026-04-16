$.get("http://127.0.0.1/api", function(data) {
    var number = data.number;
    document.getElementById("name1").innerHTML= data.name;
    document.getElementById("name2").innerHTML= data.name +" (" + data.number + " )";   // 姓名加学号
    document.getElementById("time1").innerHTML=  "请假时间: "+ data.time1 +" ~ "+ data.time2;
    document.getElementById("time3").innerHTML= "申请时间: "+ data.time3;
    document.getElementById("cause").innerHTML= "请假原因: " + data.cause;

    document.getElementById("teacher1").innerHTML= "审核人：" + data.teacher;
    document.getElementById("teacher2").innerHTML= "审核人：" + data.teacher;
    document.getElementById("teacher3").innerHTML= "审核人：" + data.teacher;
    document.getElementById("teacher4").innerHTML= "审核人：" + data.teacher;
    document.getElementById("teacher5").innerHTML= "审核人：" + data.teacher;

    // 判断假条状态
    let Eliminate = data.Eliminate;
    Eliminate1();

    function Eliminate1(){
    if(Eliminate == "true"){
        document.getElementById("leave_permit").style.display = "";
        document.getElementById("approval_status").innerHTML= "已销假";
        document.getElementById("leave_permit_show").style.display = "none";
    }
    else{
        1
    }
    }

    document.getElementById("pageContent").style.display = "block";
})