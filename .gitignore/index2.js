//Adicionando um comentário de detalhamento de código
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

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

