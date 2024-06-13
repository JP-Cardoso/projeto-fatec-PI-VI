import { sequelize } from './infra/config/mysql/database-config.js';
import app from '../src/infra/server/server.js';
import dotenv from 'dotenv';

const main = async () => {
  dotenv.config();
  const port = process.env.PORT || 8080;
  const server = app;
  try {
    await sequelize.authenticate();
    console.log('Conexão ao banco de dados realizada com sucesso!');

    server.listen(port, () => {
      console.log(`Servidor em execução na porta ${port}`);
    });

    //sub.subMessage();
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
};

main();
