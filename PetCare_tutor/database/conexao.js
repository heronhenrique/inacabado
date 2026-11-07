// Importa a biblioteca SQLite.
const Database = require('better-sqlite3');

// Cria ou conecta ao banco de dados.
const db = new Database('petcare.db');

// Cria a tabela de clientes caso ela não exista.
db.exec(`
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cpf TEXT NOT NULL,
      telefone TEXT NOT NULL,
      email TEXT,
      endereco TEXT
    )
`);

// Exporta a conexão para outros arquivos.
module.exports = db;