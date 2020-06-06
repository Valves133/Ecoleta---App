import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();


app.use(cors());

// For node  read JSON
app.use(express.json());

// router
app.use(routes);

// router path to upload folder
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// using port 3333
app.listen(3333);
