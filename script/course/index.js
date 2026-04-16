$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("number1").innerHTML= "学号：" + data.number;
    document.getElementById("name1").innerHTML= data.name;
    document.getElementById("time1").innerHTML= data.time1;
    document.getElementById("time2").innerHTML= data.time2;
    document.getElementById("time4").innerHTML= data.time4;

    document.getElementById("pageContent").style.display = "block";

    let Leave_School = data.Leave_School;
    let Leave_City = data.Leave_City;

    if(Leave_School == "离校")
    {
    if(Leave_City == "是"){
        document.getElementById("Leave_City").innerHTML= "离开本市";
    }
    }
    else if(Leave_School == "离校")
    {
    if(Leave_City == "否"){
        document.getElementById("Leave_City").innerHTML= "离校不出市";
    }
    }
    else{
    document.getElementById("Leave_City").innerHTML= "不离校不出市";
    }

    document.getElementById("sex").innerHTML= "性别：" + data.sex;
    document.getElementById("college_teacher").innerHTML= "院系：" + data.college + "-" + data.teacher;
    document.getElementById("teacher").innerHTML= data.teacher;
    
    let str = data.college;
    let result = str.replace(/[\d-]+/g, "");
    document.getElementById("school_college").innerHTML= "许昌陶瓷职业学院" + " " + result;

    let pictureurl = data.picture
    picture()

    function picture() {
    if(!pictureurl || pictureurl === "0" || pictureurl === "undefined"){
    }
    else{document.getElementById("picture").src= data.picture;}
    }
    

});


function onAction(){
    const qrc = document.getElementById('qrcode_box2_area');
    qrc.style.display = qrc.style.display === 'none' ? 'block' : 'none';
};