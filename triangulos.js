/*Crie um código JS que receba os comprimentos dos lados de um triângulo 
através de inputs e retorne sua classificação quanto ao tamanho
 de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.
 */

const l1 = document.querySelector("#lado1");
const l2 = document.querySelector("#lado2");
const l3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const h3 = document.querySelector("#h3");



l1.onblur = () => {
    if(l1.value == ""){
        c1.style = "color: #aa0044";
        l1.style = "border-color: #aa0044";
    }else{
        c1.style = "color: #000000";
        l1.style = "border-color: #000000";
    }
}

l2.onblur = () => {
    if(l2.value == ""){
        c2.style = "color: #aa0044";
        l2.style = "border-color: #aa0044";
    }else{
        c2.style = "color: #000000";
        l2.style = "border-color: #000000";
    }
}

l3.onblur = () => {
    if(l3.value == ""){
        h3.style = "color: #aa0044";
        l3.style = "border-color: #aa0044";
    }else{
        h3.style = "color: #000000";
        l3.style = "border-color: #000000";
    }
}

btn.onclick = () => {
    if(l1.value == ""){
        l1.focus();
    }else if(l2.value == ""){
        l2.focus();
    }else if(l3.value ==""){
        l3.focus();
    }else{
        res.value = verificaTriângulo
        
    }
}

const verificaTriângulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log("O triângulo é equilátero");
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log("O triângulo é isósceles");
    } else {
        console.log("O triângulo é escaleno");
    }
}
  


    


