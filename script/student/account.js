$.get("http://127.0.0.1/api", function(data) {
    document.getElementById("number1").value = data.number
    document.getElementById("name1").value = data.name
    
    if (data.sex == "男")
    {
        document.getElementById("man").selected=true;
    }
    else{document.getElementById("girl").selected=true;}

    


    pictureurl = data.picture
    picture()

    function picture() {
        if(pictureurl != "" || pictureurl != "0" ){
            document.getElementById("picture_src").src= data.picture;
            document.getElementById("picture_src").style.display = "block";
            document.getElementById("picture").style.display = "none";
        }


    }

    document.getElementById("pageContent").style.display = "block";
})