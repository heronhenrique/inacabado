// Seleciona o formulário de cadastro.
const formulario = document.getElementById('fromCliente');

// Captura o envio do formulário.
formulario.addEventListener('submit', function(event){

    // Impede o recarregamento da página.
    event.preventDefault();

    // Captura os dados digitados pelo usuário.
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;

    // Exibe os dados do console para teste.
    console.log({
        nome,
        cpf,
        telefone,
        email,
        endereco
    });

    alert('Dados capturados com sucesso!')
});