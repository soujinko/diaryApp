import express from 'express';
import Post from '../models/post.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log('posts', posts);
    if (posts.length) {
      res.status(200).send(posts);
    } else {
      res.status(400).send({ errorMessage: '조회할 정보가 없습니다.' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).send();
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content, imgSrc } = req.body;
    console.log('데이터확인', req);
    if (!title || !content) {
      res.status(400).send({ errorMessage: '내용을 작성하세요' });
    }
    let imgsrc;
    if (!imgSrc) {
      imgsrc = 'none';
    } else {
      imgsrc = imgSrc;
    }
    console.log('req.body test', req.body);
    const post = await Post.find({ title: title });
    if (post.length > 0) {
      res.status(400).send({ errorMessage: '제목을 다시 작성하세요' });
    } else {
      await Post.create({ title, content, imgsrc });
      res.status(201).send({});
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).send();
  }
});

router.delete('/:cardId', async (req, res) => {
  try {
    const { cardId } = req.params;
    console.log('cardId', cardId);
    if (!cardId) {
      res.status(400).send({ errorMessage: '잘못된 삭제정보입니다.' });
    }
    await Post.findByIdAndDelete(cardId).exec();
    res.status(200).send();
  } catch (err) {
    console.error(err.message);
    res.status(400).send();
  }
});
export default router;
