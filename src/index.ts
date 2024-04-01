import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');


//For env File 
dotenv.config();


const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());


app.get('/be', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript -> ****Backend ****Server');
});

app.get('/be/data', (req: Request, res: Response) => {
  res.send({'Name': 'Backend', 'Test': 'Sample Data'});
});

app.listen(port, () => {
  console.log(`Server is Fire at: ${port} ->  ${process.env.ENV_CHECK}`);   
});
