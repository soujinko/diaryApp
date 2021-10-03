import express from 'express';
import http from 'http';
import router from './api/index.js';
import './models/index.js';
import dotenv from 'dotenv';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

server.listen(3001, () => {
  console.log('서버 연결');
});

export default server;
