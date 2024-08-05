let lista = [];
let quantidade = 20;
let menor = 5;
let maior = 1000;

const gerarNumeros = (menos, maior) => {
  for (let i = 1; i < quantidade; i++ ){
      lista.push(Math.floor(Math.random((maior - menor + 1)) + menor));
  }
}
const mostrar = () =>{
    document.getElementById("saida_lista").innerHTML= lista;
}
const bubbleSort = () =>{
    let trocar = true;
    while(trocar){
        let valor;
        trocar = false 
        for(let i=0; i < lista.length - 1; i++){
            if(lista [i] > lista[i+1]){
                valor = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = valor;
                trocar = true;
                mostrar();
                console.log(lista);
            }
        }
    }
}
(() => {
    mostrar();
})();
