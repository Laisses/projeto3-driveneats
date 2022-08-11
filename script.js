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
    btn.style.backgroundColor = "#32B72F";
    btn.removeAttribute("disabled");
}

document.querySelectorAll("form").forEach(form => {
    form.onclick = isChecked;
});