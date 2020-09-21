let input_cep = document.querySelector('#txt-cep');

input_cep.addEventListener('change', function(event) {
    console.log("MUDOU!");
    // input_cep.value é a mesma coisa
    let cep = event.target.value
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(function(response) {
    return response.json()
    }).then(function(data) {
        let {
            bairro,
            localidade,
            logradouro,
            uf
        } = data
        
        document.querySelector('#txt-rua').value = logradouro;
        document.querySelector('#txt-bairro').value = bairro;
        document.querySelector('#txt-cidade').value = localidade;
        document.querySelector('#txt-estado').value = uf;
    });
})