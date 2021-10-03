import express from 'express';
import Post from '../models/post.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts.length) {
      res.status(200).send({ posts });
    } else {
      res.status(400).send({ errorMessage: '조회할 정보가 없습니다.' });
    }
  } catch (err) {
    const error = err.message;
    console.log(error);
    res.status(400).send();
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content, imgsrc } = req.body;
    console.log('req.body test', req.body);
    const post = await Post.find({ title: title });
    if (post.length > 0) {
      res.status(400).send({ errorMessage: '제목을 다시 작성하세요' });
    } else {
      await Post.create({ title, content, imgsrc });
      res.status(201).send({});
    }
  } catch (err) {
    const error = err.message;
    console.log(error);
    res.status(400).send();
  }
});
export default router;
