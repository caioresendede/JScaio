function converter() {
    const caixa = document.getElementById("task");
    caixa.value = caixa.value.toUpperCase();
}

function add() {
    const newTask = document.createElement("div");
    const newH2 = document.createElement("h2");
    const texto = document.getElementById("task").value;
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
    newTask.appendChild(inputCheck);
    inputCheck.addEventListener("click", function(){  
        if(inputCheck.checked==true){
            newH2.style.textDecorationLine = "line-through";
           
         } else {
            newH2.style.textDecorationLine = "none";
         }

       })
    
    }