import express from 'express';
import {comments} from './comments';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
    res.send({comments: comments});
});

export default router;