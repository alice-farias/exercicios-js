alert("Olá, vamos calcular seu IMC.")

let altura = parseFloat(prompt("Digite sua altura"));

let peso = parseFloat(prompt("Digite seu peso"))

let imc = peso / (altura * altura)

if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu IMC é de ${imc}. Você está saudável`)
}

else {
    alert(`Seu imc é de ${imc}, de acordo com a tabela de IMC, você não está saudável. Mas não se preocupe, nem sempre o IMC é assertivo. Leve em consideração seu contexto de vida e saúde.`)
}