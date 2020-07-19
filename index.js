import dotenv from 'dotenv';
import express from 'express';
import postsRouter from './api/posts';
import commentsRouter from './api/comments';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/posts', postsRouter);
app.use(express.static('public'));

app.use('/api/comments', commentsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});