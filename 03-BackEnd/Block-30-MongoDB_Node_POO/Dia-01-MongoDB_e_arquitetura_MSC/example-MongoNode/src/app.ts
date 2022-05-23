import * as express from 'express';
import routes from './routes/routes';
import connection from './models/connection';



class App {
  public app: express.Express;
  public connection: Promise<typeof import('mongoose')>;

  constructor() {
    this.app = express();
    this.connection = connection();
    this.config();
    this.routes();

  }

  private config():void {    
    this.app.use(express.json());
    
  }

  private routes() {
    this.app.use(routes);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log('Listening at port', PORT));
  }
  
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();