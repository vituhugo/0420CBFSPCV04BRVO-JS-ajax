function exibeAlerta() {
    alert("CLIQUEI NO BOTAO")
}

function exibeMensagem(event) {
    let nome = document.getElementById('txt-nome');
    console.log("Elemento em foco", event.target);
}

// Criar formulário com os campos:
// nome
// cep
// rua
// número
// bairro
// cidade
// estado

// Ao preencher o cep completo, exibir console.log com o valor.
// elemento.value

//Eventos de forms

// Botão
// click: executa quando o botão é clicado

// Inputs de formulários
//focus: executa ao entrar no input
//blur: executa ao sair do input
//change: executa quando o valor de um campo é alterado

// Formulário
// submit: executa quando o formulário é disparado


// Adicionando funcao callback no evento
let btn = elemento = document.getElementsByTagName('button').item(0);

// btn.onclick = exibeAlerta(); //ERRADO
btn.onclick = exibeAlerta; //CERTO
btn.onclick = function() {/**...*/}

/**
 * Ao adicionar o parentessis a gente executa a função e o q é retornado pro onclick é o retorno exibeAlerta;
 */

 // A melhor forma de se adicionar o evento a um elemento.
 btn.addEventListener("click", exibeAlerta);
 btn.addEventListener("click", function() {
     console.log("OUTRA FUNCAO");
 });

 document.body.onkeydown = function(event) {

    // Evita que o evento continue com o comportamento padrão.
    event.preventDefault()

    // Pega a tecla apertada no momento
    event.key
    

    console.log("TECLA PRESSIONADA");
    // COMO CAPTURO A TECLA PRESSIONADA?
 };

 document.getElementById('txt-nome').addEventListener("focus", exibeMensagem);
 document.getElementById('txt-email').addEventListener("focus", exibeMensagem);
 // dentro do navegador acontece isso: document.body.onkeydown(EVENT);