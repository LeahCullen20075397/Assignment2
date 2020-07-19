import express from 'express';
import {posts} from './posts';
import {comments} from './posts';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
  res.send({posts: posts});
});

router.get('/', (req, res) => {
    res.send({posts: comments});
});

export default router;