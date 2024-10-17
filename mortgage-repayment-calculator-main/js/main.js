// elementos
const valor = document.querySelector("#valor");
const labelValor = document.querySelector('label[for = "valor"]');
const prazo = document.querySelector("#prazo");
const labelPrazo = document.querySelector('label[for = "prazo"]');
const juro = document.querySelector("#juro");
const labelJuro = document.querySelector('label[for = "juro"]');
const radioRepayment = document.querySelector("#radio-r");
const radioJuros = document.querySelector("#radio-j");
const repayment = document.getElementById("#repayment");
const labelRepayment = document.querySelector("#Repayment-label");
const juros = document.getElementById("#juros");
const labelJuros = document.querySelector("#juros-label");
const button = document.querySelector("#button-calc");
const number = document.querySelector("#number");
const numberWhite = document.querySelector("#number-white");
const resultados = document.querySelector(".resultados");
const resultadosCompletos = document.querySelector(".resultado-completo");
const resultNumbers = document.querySelector(".result-numbers");
const clear = document.querySelector("#clear")








// Eventos
const calculadoraReembolso = () =>{
    // / Pegando os valores mais recentes dos inputs
    const hipoteca = parseFloat(valor.value);
    const prazoHipoteca = parseFloat(prazo.value);
    const jurosAnual = parseFloat(juro.value);
    
    // Convertendo o juros anual para mensal
    const juroMensal = (jurosAnual / 100) / 12;

    // Número de meses de pagamento
    const mesesPag = prazoHipoteca * 12;

    // Fórmula de amortização
    const mensal = hipoteca * (juroMensal * (1 + juroMensal) ** mesesPag) / ((1 + juroMensal) ** mesesPag - 1);

    console.log("Valor Mensal (Reembolso):", mensal);

    return mensal.toFixed(2);
  // Retorna o valor arredondado para 2 casas decimais
}

const calculadoraReembolsoTotal = () =>{
    const hipoteca = parseFloat(valor.value);
    const prazoHipoteca = parseFloat(prazo.value);
    const jurosAnual = parseFloat(juro.value);

    // Número de meses de pagamento
    const mesesPag = prazoHipoteca * 12;

    const juroMensal = (jurosAnual / 100) / 12;

    const mensal = hipoteca * (juroMensal * (1 + juroMensal) ** mesesPag) / ((1 + juroMensal) ** mesesPag - 1);

    const total = mensal * mesesPag;

    console.log("Valor Total (Reembolso):", total);

    

    return total.toFixed(2);

}

const calculadoraApenasjuros = () =>{
    const hipoteca = parseFloat(valor.value);
    const jurosAnual = parseFloat(juro.value);
    // Convertendo o juros anual para mensal
    const juroMensal = (jurosAnual / 100) / 12;

    const mensalJuros = hipoteca * juroMensal;

    

    console.log("Valor Mensal (Apenas Juros):", mensalJuros);

   

    return mensalJuros.toFixed(2);

}
const calculadoraApenasjurosTotal = () =>{
    const hipoteca = parseFloat(valor.value);
    const jurosAnual = parseFloat(juro.value);
    const prazoHipoteca = parseFloat(prazo.value);
    const juroMensal = (jurosAnual / 100) / 12;
    // Número de meses de pagamento
    const mesesPag = prazoHipoteca * 12;

    const mensalJuros = hipoteca * juroMensal;

    const totalJuros = mensalJuros * mesesPag

    console.log("Valor Total (Apenas Juros):", totalJuros);

    return totalJuros.toFixed(2);


}
clear.addEventListener('click',() =>{
    

    valor.value = ""
    prazo.value = ""
    juro.value = ""
    repayment.checked = false;
    juros.checked = false;
    
    
})


button.addEventListener("click", ()=>{
    const repayment = document.querySelector("#repayment");
    const juros = document.querySelector("#juros");

    resultados.style.display = 'none'
    resultadosCompletos.style.display = 'flex'
    resultNumbers.style.display = 'flex'

    if (repayment.checked) {

        console.log("Repayment selecionado");
        // Calcula o valor mensal e o total para o caso de reembolso
        const mensalReembolso = calculadoraReembolso();
        const totalReembolso = calculadoraReembolsoTotal();

        // Atualiza o conteúdo da interface
        number.innerHTML = `R$ ${mensalReembolso}`;
        numberWhite.innerHTML = `R$ ${totalReembolso}`;
    }
    else if (juros.checked) {
        console.log("Apenas Juros selecionado");
        // Calcula o valor mensal e o total para o caso de apenas juros
        const mensalJuros = calculadoraApenasjuros();
        const totalJuros = calculadoraApenasjurosTotal();

        // Atualiza o conteúdo da interface
        number.innerHTML = `R$ ${mensalJuros}`;
        numberWhite.innerHTML = `R$ ${totalJuros}`;
    }else {
        // Caso nenhum tipo de hipoteca tenha sido selecionado
        alert("Por favor, selecione o tipo de hipoteca.");
        resultados.style.display = 'flex'
        resultadosCompletos.style.display = 'none'
        resultNumbers.style.display = 'none'
    }

    console.log("Tipo de hipoteca selecionado:");
    console.log("Repayment:", radioRepayment.checked);
    console.log("Juros:", radioJuros.checked);
})



// Foco e desfoco nos campos de input para adicionar classes de estilo
valor.addEventListener('focus', ()=>{
    labelValor.classList.add("valor-label-focus")
});
valor.addEventListener('blur',()=>{
    labelValor.classList.remove("valor-label-focus")
});


prazo.addEventListener('focus', ()=>{
    labelPrazo.classList.add("custom-label")
});
prazo.addEventListener('blur',()=>{
    labelPrazo.classList.remove("custom-label")
});


juro.addEventListener('focus', ()=>{
    labelJuro.classList.add("custom-label")
});
juro.addEventListener('blur',()=>{
    labelJuro.classList.remove("custom-label")
});

// mudança de checked

radioRepayment.addEventListener("click",()=>{
    repayment.click();

})

radioJuros.addEventListener("click",()=>{
    juros.click();
})


// tirando textos do input 

const validDigits = (text) =>{
    return text.replace(/[^0-9,]/g, "");
};
const valorChange = (e)=>{
    const uptadeValue = validDigits(e.target.value);

    valor.value = uptadeValue;

};
const prazoChange = (e)=>{
    const uptadeValue = validDigits(e.target.value);

    prazo.value = uptadeValue;

};
const juroChange = (e)=>{
    const uptadeValue = validDigits(e.target.value);

    juro.value = uptadeValue;

};

valor.addEventListener('input', valorChange);
prazo.addEventListener('input', prazoChange);
juro.addEventListener('input', juroChange);