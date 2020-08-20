import axios from 'axios';

export const upvote = postId => {
  return axios.post(`/api/posts/${postId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios('/api/posts')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/posts/${postId}`)
              .then(resp => resp.data);
};

export const add = (newEvent, newPoster, newLocation, newDate, newTime, newLink) => {
  return axios.post('/api/posts', { event: newEvent, poster: newPoster, location: newLocation, date: newDate, time: newTime, link: newLink })
              .then(resp => resp.data);
};