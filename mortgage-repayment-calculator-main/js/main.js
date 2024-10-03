// elementos
const valor = document.querySelector("#valor");
const labelValor = document.querySelector('label[for = "valor"]');
const prazo = document.querySelector("#prazo");
const labelPrazo = document.querySelector('label[for = "prazo"]');
const juro = document.querySelector("#juro");
const labelJuro = document.querySelector('label[for = "juro"]');
const radioRepayment = document.querySelector("#radio-Repayment");
const radioJuros = document.querySelector("#radio-juros");
const repayment = document.querySelector("#Repayment");
const labelRepayment = document.querySelector("#Repayment-label")
const juros = document.querySelector("#juros")
const labelJuros = document.querySelector("juros-label")








// Eventos

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