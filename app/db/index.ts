import path from 'path';
import  {Sequelize} from 'sequelize-typescript'
import config from '../config';
console.log(config);

const sequelize = new Sequelize(config.db.database as string, config.db.username as string, config.db.password, {
    host: config.db.host,
    port:Number(config.db.port),
    dialect:'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    models:[path.join(__dirname,'models','**/*.ts'),path.join(__dirname,'models','**/*.js')],
    define:{
      timestamps:false,
      updatedAt:'updatedAt',
      createdAt:'createdAt',
    }
  });
  
  const db =async()=>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
export default db