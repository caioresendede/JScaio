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


    const btCheck = document.createElement("button");
    btCheck.innerHTML = "Check";
    document.getElementById("btCheck").addEventListener("click", function(){
        document.getElementById("newH2").classList.toggle("estilizado");});
}
