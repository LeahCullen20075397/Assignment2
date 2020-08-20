import dotenv from 'dotenv';
import express from 'express';
import postsRouter from './api/posts';
import commentsRouter from './api/comments';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
/*
BUG: bug occurred when the line was just "app.use(bodyParser.urlencoded());" it worked fine for the
first assignment. However at this stage bodyparser changed its constructor to require a parmeter
when it didn't before, which made the code that previously worked no longer run

FIX: added the extended parameter to bodyparser's constructor
*/
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.use('/api/posts', postsRouter);
app.use(express.static('public'));

app.use('/api/comments', commentsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});