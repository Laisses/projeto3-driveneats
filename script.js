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

/*prato
if (prato) {
    querySelector(`label[for=${prato.id}]`)
}*/

const completeOrder = () => {
    const valor = calculatePrice();


    const prato = document.querySelector("label").children;
    console.log(prato[1].innerText);

    const message = `Total: R$ ${valor}`;
    console.log(message);
    


}

/*Olá, gostaria de fazer o pedido:
- Prato: Frango Yin Yang
- Bebida: Coquinha Gelada
- Sobremesa: Pudim
Total: R$ 27.70 */