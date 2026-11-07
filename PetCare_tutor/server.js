/*
// Importa os modulos necessários.
const http = require('http');
const fs = require('fs');
const path = require('path');

// Importa a conexão com o banco de dados.
const db = require('./database/conexao');

// Define a porta do servidor.
const PORTA = 3000;

// Tipos de arquivos aceitos pelo servidor.
const tiposArquivos = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript'

};

// Cria o servidor HTTP.
const servidor = http.createServer((req, res) => {
    // Rota para cadastrar clientes.
    if (req.method === 'POST' && req.url === '/api/clientes'){
        let dadosRecebidos = '';

        // Recebe os dados enviados pelo formulario.
        req.on('data', (parte) => {
            dadosRecebidos += parte;

            // Limita o tamanho da requisição a 100 KB.
            if (dadosRecebidos.length > 100 * 1024){
                req.destroy();
            }
        });

        // Processa os dados recebidos.
        req.on('end',() => {

            try {
                const cliente = JSON.parse(dadosRecebidos);

                // Captura e limpa as informações.
                const nome = String(cliente.nome || '').trim();
                const cpf = String(cliente.cpf || '').replace(/\D/g, '');
                const telefone = String(cliente.telefone || '').trim();
                const email = String(cliente.email || '').trim();
                const endereco = String(cliente.endereco || '').trim();

                // Valida os campos obrigatórios.
                if (!nome || cpf.length !== 11 || !telefone) {
                    res.writeHead(400, {
                        'Content-Type': 'application/json; charset=utf-8'
                    });

                    return res.end(JSON.stringify({
                        mensagem: 'Preencha nome, CPF válido e telefone.'
                    }));
                }

                //  Prepara o comando SQL para inserir o cliente.
                const comando = db.prepare(`
                   INSERT INTO clientes
                   (nome, cpf, telefone, email, endereco)
                   VALUES (?, ?, ?, ?, ?)
                `);

                // Executa o cadastro no banco de dados.
                const resultado = comando.run(
                    nome,
                    cpf,
                    telefone,
                    email,
                    endereco
                );

                // Retorna a confirmação do cadastro.
                res.writeHead(201, {
                    'Content-Type': 'application/json; charset=utf-8'
                });

                res.end(JSON.stringify({
                    mensagem: 'Cliente cadastrado com sucesso!'
                }));

            } catch (erro) {
                // Identifica CPF que ja está cadastrado.
                if (erro.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                    res.writeHead(409, {
                        'Content-Type': 'application/json; charset=utf-8'
                    });

                    return res.end(JSON.stringify({
                        mensagem: 'Este CPF já está cadstrado.'
                    }));
                }

                // Tratar outros erros.
                console.error('Erro ao cadastar cliente:', erro);
                
                res.writeHead(500,{
                    'Content-Type': 'application/json; charset=utf-8'
                });

                res.end(JSON.stringify({
                    mensagem: 'Erro interno ao cadastrar cliente.'
                }));
            }
        });
        
        return;

    }

    // Define a página solicitada.
    const caminho = req.url === '/'
    ? '/index.html'
    : decodeURIComponent(req.url);

    // Monta o caminho completo do arquivo.
    const arquivo = path.join(__dirname, 'public', caminho);

    // Identifica a extensão do arquivo.
    const extensao = path.extname(arquivo);

    // Lê o arquivo solicitado.
    fs.readFile(arquivo, (erro, conteudo) => {

    // Verifica se o arquivo existe.
    if (erro) {
        res.writeHead(404);
        return res.end('Arquivo não encontrado.');
    }

   });*/
          
   