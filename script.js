const isChecked = () => {
    const pratos = document.querySelector("input[name=prato]:checked");
    const bebidas = document.querySelector("input[name=bebida]:checked");
    const sobremesas = document.querySelector("input[name=sobremesa]:checked");

    if (pratos !== null && bebidas !== null && sobremesas !== null) {
        enableBtn();
    }
};

const enableBtn = () => {
    const btn = document.querySelector("button");
        
    btn.textContent = "Fechar pedido";
    btn.classList.add("bg-green");
    btn.removeAttribute("disabled");
}

document.querySelectorAll("form").forEach(form => {
    form.onclick = isChecked;
});

const calculatePrice = () => {
    const prato = parseInt(document.querySelector("input[name=prato]:checked").value);
    const bebida = parseFloat(document.querySelector("input[name=bebida]:checked").value);
    const sobremesa = parseInt(document.querySelector("input[name=sobremesa]:checked").value);

    const soma = prato + bebida + sobremesa;
    
    return soma.toFixed(2);
}

const chooseOrder = () => {
    const prato = document.querySelector("input[name=prato]:checked");
    const bebida = document.querySelector("input[name=bebida]:checked");
    const sobremesa = document.querySelector("input[name=sobremesa]:checked");
    
    const pratoEscolhido = document.querySelector(`label[for=${prato.id}]`).children[1].innerText;
    const bebidaEscolhida = document.querySelector(`label[for=${bebida.id}]`).children[1].innerText;
    const sobremesaEscolhida = document.querySelector(`label[for=${sobremesa.id}]`).children[1].innerText;

    return {pratoEscolhido, bebidaEscolhida, sobremesaEscolhida}
}

const completeOrder = () => {
    const pedido = chooseOrder();
    const valor = calculatePrice();

    const menssagem = 
        `Olá, gostaria de fazer o pedido:
        - Prato: ${pedido.pratoEscolhido} 
        - Bebida: ${pedido.bebidaEscolhida} 
        - Sobremesa: ${pedido.sobremesaEscolhida} 
        Total: R$ ${valor}`;       
    
    console.log(menssagem);
}