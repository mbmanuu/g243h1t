function mensagem(){
    alert("cu");
}

imprime = (msg) => console.log(msg);
const data = new Date();
function hora_atual(){
    setTimeout(hora_atual, 1000)
    document.getElementById("h").innerHTML = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
 }

 FazerSorteio = () => {
     num1 = document.getElementById("inicio").value;
     num2 = document.getElementById("fim").value;
    let sorteio = Math.floor(Math.random(inicio, fim+1)* (Number(num2) - Number(num1)));
    document.getElementById("resultado").innerHTML = sorteio;
}

function escolher_aba(btn){
    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+i;
        let id_aba = "ab"+i;
        document.getElementById(id_btn).style.backgroundColor = "blue";
        document.getElementById(id_btn).disabled = false;
        document.getElementById(id_aba).style.display = "none";
    }
    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "red";
        document.getElementById("btn1").disabled = true;
        document.getElementById("ab1").style.display = "block";
    }
    if(btn == "2"){
        document.getElementById("btn2").style.backgroundColor = "red";
        document.getElementById("btn2").disabled = true;
        document.getElementById("ab2").style.display = "block";
    }
    if(btn == "3"){
        document.getElementById("btn3").style.backgroundColor = "red";
        document.getElementById("btn3").disabled = true;
        document.getElementById("ab3").style.display = "block";
    }
    if(btn == "4"){
        document.getElementById("btn4").style.backgroundColor = "red";
        document.getElementById("btn4").disabled = true;
        document.getElementById("ab4").style.display = "block";
    }
}