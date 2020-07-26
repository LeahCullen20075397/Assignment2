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

router.post('/', (req, res) => {
  let newPost = req.body;
  if (newPost){
    posts.push({event: newPost.event, poster : newPost.poster, location: newPost.location, date: newPost.date, time: newPost.time, link: newPost.link }) ;
    res.status(201).send({message: "Post Created"});
}else{
      res.status(400).send({message: "Unable to find Post in request. No Post Found in body"});
}
});

export default router;