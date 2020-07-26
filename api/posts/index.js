import express from 'express';
import {posts} from './posts';
import {comments} from './posts';
import stubAPI from './stubAPI';

const router = express.Router(); // eslint-disable-line

/*router.get('/', (req, res) => {
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
});*/

// get all posts
router.get('/', (req, res) => {
  const posts = stubAPI.getAll();
  res.send({posts: posts});
});


// Add a post
router.post('/', (req, res) => {
    const newPost = req.body;

    if (newPost && stubAPI.add(newPost.event, newPost.poster, newPost.location, newPost.date, newPost.time, newPost.link)) {
         return res.status(201).send({message: 'Posts Created'});
    }
    return res.status(400).send({message: 'Unable to find Post in request.'});
});

// get a post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getPost(id);

       if (post) {
               return res.status(200).send(post);
              }
              return res.status(404).send({message: `Unable to find Post ${id}`});
});

export default router;