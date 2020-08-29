# BSc (Hons.) Level 8 - Assignment 2 -Web API.

Name: Leah Cullen-O'Leary 20075397

# Overview

Basic Node.js web application implementing a simple API. This app is connected
to a Mongo Database and is deployed with basic read and write capabilities. This is
a continuation of my Kpop app in assignment 1.

Features:
- API implementation
- Implemented a Mongo Database.

# Setup

- Started off with my web app from assignment 2.
- Made a clone of that assignment so I could work without worrying about breaking my first 
  assignment
- Set up and configured a dev enviroment for Node.js
- Installed Express, Nodemon, Axios, MongoDb, etc.

## Data Model Design

![][diagram1]

## Folder Breakdown

![][diagram2]
![][diagram3]

## API Preview

~~~

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

export default router;

~~~

## UI Design

Event addition process

![][diagram4]
![][diagram5]
![][diagram6]

## Independent Learning

- Used stackoverflow to fix bugs I found throughout my code.
- Used code academy to learn about Date used in my event form.

[diagram1]: ./img/diagram1.png
[diagram2]: ./img/diagram2.png
[diagram3]: ./img/diagram3.png
[diagram4]: ./img/diagram4.png
[diagram5]: ./img/diagram5.png
[diagram6]: ./img/diagram6.png
