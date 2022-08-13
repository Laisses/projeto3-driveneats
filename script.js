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

const setsModal = () => {
    const navBg = document.querySelector("nav");
    const mainBg = document.querySelector("main");
    const modal = document.querySelector(".confirmacao");

    navBg.classList.toggle("opacity");
    mainBg.classList.toggle("opacity");
    modal.classList.toggle("escondido");
}

document.querySelector(".btn-primary").onclick = setsModal;
document.querySelector(".confirmacao-btn-cancelar").onclick = setsModal;


const confirmOrder = () => {
    const orderBtn = document.querySelector(".btn-primary");

}









const createMessage = () => {
    const pedido = chooseOrder();
    const valor = calculatePrice();

    const mensagem = 
        `Olá, gostaria de fazer o pedido:
        - Prato: ${pedido.pratoEscolhido}
        - Bebida: ${pedido.bebidaEscolhida}
        - Sobremesa: ${pedido.sobremesaEscolhida}
        Total: R$ ${valor}`;

    return mensagem;
}

const encodesURI = mensagem => encodeURIComponent(mensagem);

const sendMessage = () => {  
    const mensagem = encodesURI(createMessage());
    const url = `https://wa.me/?text=${mensagem}`;

    window.location.assign(url);
}
