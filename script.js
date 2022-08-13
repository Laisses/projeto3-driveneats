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

const getPrices = () => {
    const prato = parseInt(document.querySelector("input[name=prato]:checked").value);
    const bebida = parseFloat(document.querySelector("input[name=bebida]:checked").value);
    const sobremesa = parseInt(document.querySelector("input[name=sobremesa]:checked").value);
    
    return {prato, bebida, sobremesa};
}

const calculateTotal = () => {
    const precos = getPrices();
    return (precos.prato + precos.bebida + precos.sobremesa).toFixed(2);
}

const chooseOrder = () => {
    const prato = document.querySelector("input[name=prato]:checked");
    const bebida = document.querySelector("input[name=bebida]:checked");
    const sobremesa = document.querySelector("input[name=sobremesa]:checked");
    
    const pratoEscolhido = document.querySelector(`label[for=${prato.id}]`).children[1].innerText;
    const bebidaEscolhida = document.querySelector(`label[for=${bebida.id}]`).children[1].innerText;
    const sobremesaEscolhida = document.querySelector(`label[for=${sobremesa.id}]`).children[1].innerText;

    return {pratoEscolhido, bebidaEscolhida, sobremesaEscolhida};
}

const construtcModal = () => {
    const pedido = chooseOrder();
    const valor = getPrices();
    const total = calculateTotal();    
    
    document.querySelector(".confirmacao-prato .item").innerText = pedido.pratoEscolhido;
    document.querySelector(".confirmacao-prato .valor").innerText = valor.prato;
    document.querySelector(".confirmacao-bebida .item").innerText = pedido.bebidaEscolhida;
    document.querySelector(".confirmacao-bebida .valor").innerText = valor.bebida.toString().replace(/\./, ",");
    document.querySelector(".confirmacao-sobremesa .item").innerText = pedido.sobremesaEscolhida;
    document.querySelector(".confirmacao-sobremesa .valor").innerText = valor.sobremesa;
    document.querySelector(".confirmacao-total .valor").innerText = total.toString().replace(/\./, ",");
}

const displayModal = () => {
    construtcModal();

    const navBg = document.querySelector("nav");
    const mainBg = document.querySelector("main");
    const modal = document.querySelector(".confirmacao");

    navBg.classList.toggle("opacity");
    mainBg.classList.toggle("opacity");
    modal.classList.toggle("escondido");
}

const getData = () => {
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("E o seu endereço?");

    return {nome, endereco};
}



document.querySelector(".btn-fechar-pedido").onclick = displayModal;
document.querySelector(".btn-cancelar-pedido").onclick = displayModal;



const confirmOrder = () => {   
}

const createMessage = () => {
    const pedido = chooseOrder();
    const valor = calculateTotal();
    const dados = getData();

    const mensagem = 
        `Olá, gostaria de fazer o pedido:
        - Prato: ${pedido.pratoEscolhido}
        - Bebida: ${pedido.bebidaEscolhida}
        - Sobremesa: ${pedido.sobremesaEscolhida}
        Total: R$ ${valor}
        
        Nome: ${dados.nome}
        Endereço: ${dados.endereco}`;

    return mensagem;
}

const encodesURI = mensagem => encodeURIComponent(mensagem);

const sendMessage = () => {  
    const mensagem = encodesURI(createMessage());
    const url = `https://wa.me/?text=${mensagem}`;

    window.location.assign(url);
}

document.querySelector(".btn-confirmar-pedido").onclick = sendMessage;
