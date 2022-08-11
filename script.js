const isChecked = () => {
    const pratos = document.querySelector("input[name=prato]:checked");
    const bebidas = document.querySelector("input[name=bebida]:checked");
    const sobremesas = document.querySelector("input[name=sobremesa]:checked");

    if (pratos !== null && bebidas !== null && sobremesas !== null) {
        console.log("deu certo")
    }
};

document.querySelectorAll("form").forEach(form => {
    form.onclick = isChecked;
});