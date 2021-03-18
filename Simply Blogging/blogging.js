function addBlog(){
  storeinSession();
    var data = JSON.parse(sessionStorage.getItem("sportObj"));


    document.getElementById("division").innerHTML = "";

    data.forEach(element => {
        display(element);
    });
}


function storeinSession(){
    var data = readFormData();
     resetData();

     var prevData = JSON.parse(sessionStorage.getItem("sportObj"));

     if(prevData == null){
         prevData =[];
     }
     prevData.push(data);
    
     sessionStorage.setItem("sportObj", JSON.stringify(prevData));
}

function readFormData(){
    var obj = {};
    obj.sport = document.getElementById("sport").value;
    obj.desc = document.getElementById("desc").value;
    obj.image = document.getElementById("image").files[0].name;

    console.log(obj);
    return obj;

}


function display(data){
    var blogging = document.getElementById("division");
    blogging.innerHTML += "<br><div class='card'><img src='" + data.image + "'><div class='card-body'><h3>" + data.sport + "</h3><br><hr><p class='card-text'>" + data.desc + "</p><br></div></div>";
}


function resetData(){
    document.getElementById("sport").value="";
    document.getElementById("desc").value="";
    document.getElementById("image").value="";
}
