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
    const prato = parseFloat(document.querySelector("input[name=prato]:checked").value);
    const bebida = parseFloat(document.querySelector("input[name=bebida]:checked").value);
    const sobremesa = parseFloat(document.querySelector("input[name=sobremesa]:checked").value);
    
    return {prato, bebida, sobremesa};
}

const calculateTotal = () => {
    const precos = getPrices();
    return (precos.prato + precos.bebida + precos.sobremesa);
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
    document.querySelector(".confirmacao-prato .valor").innerText = valor.prato.toFixed(2).replace(/\./, ",");

    document.querySelector(".confirmacao-bebida .item").innerText = pedido.bebidaEscolhida;
    document.querySelector(".confirmacao-bebida .valor").innerText = valor.bebida.toFixed(2).replace(/\./, ",");

    document.querySelector(".confirmacao-sobremesa .item").innerText = pedido.sobremesaEscolhida;
    document.querySelector(".confirmacao-sobremesa .valor").innerText = valor.sobremesa.toFixed(2).replace(/\./, ",");

    document.querySelector(".confirmacao-total .valor").innerText = total.toFixed(2).replace(/\./, ",");
}

const displayModal = () => {
    document.documentElement.scrollTop = 0;   
    construtcModal();

    const navBg = document.querySelector("nav");
    const mainBg = document.querySelector("main");
    const body = document.querySelector("body");
    const modal = document.querySelector(".confirmacao");

    navBg.classList.toggle("opacity");
    mainBg.classList.toggle("opacity");
    body.classList.toggle("stop-scroll");
    modal.classList.toggle("escondido");
}

const getData = () => {
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("E o seu endereço?");

    return {nome, endereco};
}

const checkData = () => {
    const dados = getData();
    const nome = dados.nome;
    const endereco = dados.endereco;

    if (nome !== null && nome !== "" && endereco !== null && endereco !== "") {
        return {nome, endereco};
    } else {
        alert("Você precisa preencher com os seus dados");
        checkData();
    }
}

document.querySelector(".btn-fechar-pedido").onclick = displayModal;
document.querySelector(".btn-cancelar-pedido").onclick = displayModal;

const createMessage = () => {
    const pedido = chooseOrder();
    const valor = calculateTotal().toFixed(2);
    const dados = checkData();

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
