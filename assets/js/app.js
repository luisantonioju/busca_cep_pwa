async function buscarCep() {
    const cep = document.getElementById("cep").value.trim();
    const resultadoDiv = document.getElementById("resultado");

    if (cep.length !== 8 || isNaN(cep)) {
        resultadoDiv.innerHTML = '<p class="text-red-500 text-center">Digite o CEP Válido</p>';
        return;
    }

    resultadoDiv.innerHTML = '<p class="text-gray-500 text-center">Buscando...</p>';
}

document.getElementById("btnBuscar")
    .addEventListener('click', buscarCep);