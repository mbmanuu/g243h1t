function mensagem(){
    alert("cu");
}

imprime = (msg) => console.log(msg);

function sorteia(){
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    num2 = Number(num2)+1;
    let sorteio = Math.floor(Math.random(inicio, fim+1)* (Number(num2) - Number(num1)));

    document.getElementById("resultado").innerHTML = sorteio;
}

function escolher_aba(bnt){
    for(let i = 1; i <= 4; i++){
    let id_btn = "bnt"+i; 
    let id_aba = "ab"+i;
    document.getElementById(id_btn).style.backgroundColor= "black";
    document.getElementById(id_btn).disabled = false;
    document.getElementsById(class_aba).style.display = "none"
    }

    if (bnt== "1"){
        document.getElementById("bnt1").style.backgroundColor= "pink"
        document.getElementById("bnt1").disabled = true;
        document.getElementById("ab1").style.display = "block";
      }
      if (bnt== "2"){
        document.getElementById("bnt2").style.backgroundColor= "pink"
        document.getElementById("bnt2").disabled = true;
        document.getElementById("ab2").style.display = "block";
    }
      if (bnt== "3"){
        document.getElementById("bnt3").style.backgroundColor= "pink"
        document.getElementById("bnt3").disabled = true;
        document.getElementById("ab3").style.display = "block";
      }
      if (bnt== "4"){
        document.getElementById("bnt4").style.backgroundColor= "pink"
        document.getElementById("bnt4").disabled = true;
        document.getElementById("ab4").style.display = "block";
      }
    }
