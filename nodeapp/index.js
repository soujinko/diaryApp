import express from 'express';
import http from 'http';
import router from './api/index.js';
import './models/index.js';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(multer());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

server.listen(3001, () => {
  console.log('서버 연결 성공!');
});
