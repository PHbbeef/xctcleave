$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("name1").innerHTML= data.name;
    document.getElementById("name1-1").innerHTML= data.name;    // 发起申请人
    document.getElementById("name1-2").innerHTML= data.name + " 发起";
    document.getElementById("time1").innerHTML = data.time1;
    document.getElementById("time1-1").innerHTML = data.time3;  // 发起申请时间
    document.getElementById("time2").innerHTML = data.time2;
    document.getElementById("time3").innerHTML = data.time4;    // 批准时间

    document.getElementById("cause").innerHTML= data.cause;

    document.getElementById("Radio_Leave_Type").innerHTML= data.Radio_Leave_Type;
    document.getElementById("Leave_School").innerHTML= data.Leave_School;
    document.getElementById("Leave_City").innerHTML= data.Leave_City;
    document.getElementById("telephone").innerHTML= data.telephone;


    document.getElementById("teacher").innerHTML= data.teacher + " 通过";
    document.getElementById("teacher1").innerHTML= data.teacher;


    const dateString = data.time1;
    const dateObject = new Date(dateString);
    const month = dateObject.getMonth() + 1; // 注意月份是从0开始的，所以需要加1
    const day = dateObject.getDate();
    document.getElementById("time4").innerHTML = data.number + "," + data.college  + "-" + data.teacher + "," + data.classes + ",3号公寓楼-315-1"+ data.name + "（" + `${month}` + "月" + `${day}` + "日的事假）";
    //计算请假天数
    const dateday_1String = data.time1;
    const dateday_1Object = new Date(dateday_1String);
    days_1 = dateday_1Object.getDate();

    const dateday_2String = data.time2;
    const dateday_2Object = new Date(dateday_2String);
    days_2 = dateday_2Object.getDate();

    days =( (days_2 - days_1) + 1);
    document.getElementById("days").innerHTML = days

    if( days > 1){
        document.getElementById("Overnight_or_not").innerHTML = "跨夜"
        document.getElementById("Overnight_or_not").style.background="#ff0000";
    }
    else{
        document.getElementById("Overnight_or_not").innerHTML = "不跨夜"
    }


    document.getElementById("pageContent").style.display = "block";
})