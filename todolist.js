function converter() {
    const caixa = document.getElementById("task");
    caixa.value = caixa.value.toUpperCase();
}

function add() {
    const newTask = document.createElement("div");
    const newH2 = document.createElement("h2");
    const texto = document.getElementById("task").value;
    newH2.style.position = "relative";
    newH2.style.top = "30px";

    if (texto == "") {
        alert("PREENCHE ESSA PORRA! :)");
    } else {
        newH2.innerHTML = texto;
    newTask.appendChild(newH2, );
    document.body.appendChild(newTask);

    const btRemove = document.createElement("button");
    btRemove.innerHTML = "Remove";
    btRemove.addEventListener("click", function(){ newTask.remove();})
    newTask.appendChild(btRemove);


    const inputCheck = document.createElement("input");
    inputCheck.innerHTML = "Check";
    inputCheck.type = "checkbox";
    inputCheck.style.width = "20px";
    inputCheck.style.height = "20px";
    inputCheck.style.color = "green";
    inputCheck.style.position = "relative";
    inputCheck.style.right = "273px";
    inputCheck.style.bottom = "25px";

    newTask.appendChild(inputCheck);
    inputCheck.addEventListener("click", function(){  
        if(inputCheck.checked==true){
            newH2.style.textDecorationLine = "line-through";
         } else {
            newH2.style.textDecorationLine = "none";
         }});



    }

    


    
    
    }