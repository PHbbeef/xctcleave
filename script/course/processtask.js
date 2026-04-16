$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("number").innerHTML= " (" + data.number + ")" ;
    document.getElementById("name1").innerHTML= data.name;
    document.getElementById("time1").value = data.time1;
    document.getElementById("time2").value = data.time2;
    document.getElementById("time3").innerHTML = data.time3;
    document.getElementById("cause").innerHTML= data.cause;

    document.getElementById("telephone").value = data.telephone;

    document.getElementById("teacher").innerHTML= data.teacher;

    document.getElementById("classes").innerHTML= "班级：" + data.classes;

    document.getElementById("pageContent").style.display = "block";

    
    let Radio_Leave_Type_check = data.Radio_Leave_Type;
    Radio_Leave_Type_check1();

    let Leave_School = data.Leave_School;
    Leave_School1();

    let Leave_City = data.Leave_City;
    Leave_City1();

    // 判断假条状态
    let Eliminate = data.Eliminate;
    Eliminate1();

    // 公假1 事假2 病假3
    function Radio_Leave_Type_check1(){
    if(Radio_Leave_Type_check == "公假"){
        document.getElementById("Radio_Leave_Type_check1").checked=true
        document.getElementById("Radio_Leave_Type_check1_1").style.color = "#007bff";
    }
    else if (Radio_Leave_Type_check == "事假"){
        document.getElementById("Radio_Leave_Type_check2").checked=true
        document.getElementById("Radio_Leave_Type_check2_1").style.color = "#007bff";
    }
    else{
        document.getElementById("Radio_Leave_Type_check3").checked=true
        document.getElementById("Radio_Leave_Type_check3_1").style.color = "#007bff";
    }
    }

    // 离校
    function Leave_School1(){
    if(Leave_School == "离校"){
        document.getElementById("Leave_School1").checked=true
        document.getElementById("Leave_School1_1").style.color = "#007bff";
    }
    else{
        document.getElementById("Leave_School2").checked=true
        document.getElementById("Leave_School2_1").style.color = "#007bff";
    }
    }

    // 离开本市
    function Leave_City1(){
    if(Leave_City == "是"){
        document.getElementById("Leave_City1").checked=true
        document.getElementById("Leave_City1_1").style.color = "#007bff";
    }
    else{
        document.getElementById("Leave_City2").checked=true
        document.getElementById("Leave_City2_2").style.color = "#007bff";
    }
    }

    // 判断假条状态
    function Eliminate1(){
    if(Eliminate == "true"){
        document.getElementById("accordionOperation").style.display = "none"
        document.getElementById("leave_permit").innerHTML= "进入/查看销假流程 ";
        document.getElementById("leave_permit").style.color = "#576b95";
        document.getElementById("leave_permit1").style.display = "block"
        document.getElementById("approval_status2").style.display = "block"
        document.getElementById("approval_status1").innerHTML= "已销假";
        document.getElementById("teacher").innerHTML= data.name;
        var leave_permit_link = document.getElementById("leave_permit_link");
        leave_permit_link.href= "./8378824.html"
    }
    else{ //假条没有销假
        document.getElementById("accordionOperation").style.display = "block"
        document.getElementById("leave_permit").innerHTML= "出示假条";
    }
    }

})
 
    function myFunction(){
      let isVisible = true;
      document.getElementById("ao_check_body").style.display = "block"
      // document.getElementById("ao_check_body").style.display = isVisible ? "block" : "none";
    }


//获取定位

    // 修改div元素
    let getInfo = document.getElementById("getInfo")
    let map

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(myGPSFun)
    }
    else alert("您的浏览器不支持地理定位")


    function myGPSFun(e){
        let jd = e.coords.longitude //经度
        let wd = e.coords.latiude   //纬度

        map = new BMap.Map("geoInfo")   //创建地图实例

        let point = new BMap.Point(113.835250,34.139678)   //存储经度和纬度

        let convertor = new BMap.Convertor()    //坐标转换对象
        let pointArr = []
        pointArr.push(point)
        convertor.translate(pointArr,1,5,translateCalback)
    }

    function translateCalback(e){
        if(e.status == 0){
            let marker = new BMap.Marker(e.points[0])
            map.centerAndZoom(e.points[0],15)   //初始化地图，设置中心坐标和地图级别
            map.addOverlay(marker)
            map.enablesScrollWheelZoom(true)    //开启鼠标滑轮缩放功能
        }
    }