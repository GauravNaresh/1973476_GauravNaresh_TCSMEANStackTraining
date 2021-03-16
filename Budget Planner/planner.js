var buffer = 0;
function onFormSubmit(){
    var data = readFormData();  
    console.log(data);
    buffer +=1;
    sessionStorage.setItem("budgetObj" + buffer, JSON.stringify(data)); 
}

function readFormData(){
    var obj ={}
    obj.clientName = document.getElementById("client").value;
    obj.projectName = document.getElementById("project").value;
    obj.budget = document.getElementById("budget").value;
    resetData();
    return obj;
}

function printTable(){
    var sum =0;
    var len = sessionStorage.length;
  
    for(i = 1; i < len +1; i++){

        var obj = sessionStorage.getItem("budgetObj" +i);
        var data = JSON.parse(obj);
        var table = document.getElementById("budgetList");
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow(body.length);  
       
        var cell1 = newRow.insertCell(0);          
        cell1.innerHTML=data.clientName;                  
       
        var cell2 = newRow.insertCell(1);          
        cell2.innerHTML=data.projectName;                 

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.budget;

        sum += parseInt(data.budget);

    }

document.write("<br/>   <br/>")
document.write(" Total budget is: " + sum + "<br/>");
}

function resetData(){
    document.getElementById("client").value="";
    document.getElementById("project").value="";
    document.getElementById("budget").value="";
}