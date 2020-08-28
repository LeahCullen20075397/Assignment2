import express from 'express';
import Post from './postsModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();// eslint-disable-line

router.get('/', asyncHandler(async (req, res) => {
  const posts = await Post.find();
  return res.send(posts);
}));

// Add a post
router.post('/', asyncHandler(async (req, res) => {
    const newPost = req.body;
    if (newPost) {
          const post = await Post.create(newPost);
          return res.status(201).send({post});
      } else {
         return handleError(res, err);
      }
}));

// upvote a post
router.post('/:id/upvotes', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  post.upvotes++;
  await post.save();
  return res.status(201).send({post});
}));

// get post
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = await Post.findById(id);
    return res.send({post});
}));



/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

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