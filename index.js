//Adicionando um comentário de detalhamento de código
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
//Sobre a modificação
const Tabelas = require('./infraestrutura/tabelas');

//Criando conexão com o servidor e gerindo conexões 
conexao.connect(erro => {
  if(erro){
    console.log(erro);
  }else{
    console.log('Servidor conectado com sucesso!');

    Tabelas.init(conexao);
    Tabelas.criarAtendimentos();
    const app = customExpress();

    app.listen(3000, () => console.log('Server rodando'));
  }
});

