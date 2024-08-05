const Pilha = () => {
    let dados = [];
    empilhar = (valor) => {
        if (valor.length < 1) return
        dados.push(valor);
        imprimir();
    };
    desempilhar = () =>{
        let retirado = null;
        if (altura() > 0){
            dados.splice(altura()-1,1);
            imprimir();
        }
    };
    altura = () => dados.length;
    imprimir = () => {
        let saida = "";
        for (let i = altura()-1;i >= 0;i--){
            saida += "<div>[" + dados[i]+ "]</div>"
        }
        document.getElementById("dados_pilha").innerHTML = saida;
    }
    return {
        empilhar,
        desempilhar,
        altura,
        imprimir
    }
}

let pilha = Pilha();

document.querySelector("#btnEmpilhar").onclick = function(){
    pilha.empilhar(document.querySelector("#valor").value);
    document.querySelector("#valor").value = "";
    document.querySelector("#valor").focus();
};
document.querySelector("#valor").onkeyup = function(e){
    if(e.keyCode == 13){
        pilha.empilhar(document.querySelector("#valor").value);
        document.querySelector("#valor").value = "";
        document.querySelector("#valor").focus();
    }
}