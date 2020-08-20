import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

// get all posts
router.get('/', (req, res) => {
  const posts = stubAPI.getAll();
  res.send({posts: posts});
});


// Add a post
router.post('/', (req, res) => {
    const newPost = req.body;
    console.log(newPost);
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

// upvote a post
router.post('/:id/upvote', (req, res) => {
  const id = req.params.id;
         if (stubAPI.upvote(id)) {
              return res.status(200).send({message: `Post ${id} Upvoted`});
         }
         return res.status(404).send({message: `Unable to find Post ${id}`});
});
/*
// Delete a contact
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = posts.map((post)=>{
return post.id;
}).indexOf(id);
 if (index > -1) {
contacts.splice(index, 1);
     res.status(200).send({message: `Deleted post with post id: ${id}.`});
 } else {
   res.status(400).send({message: `Unable to find post with post id: ${id}.`});
   }
});*/

export default router;