import _ from 'lodash';

export const posts = [
    {
        'id': '1',
        'event': 'Moodle',
        'poster': 'Joe Bloggs',
        'location': 'Waterford',
        'date': '28/10/2020',
        'time': '20:00',
        'link': 'http://moodle.wit.ie',
        'comments': '[]',
        'upvotes': '10',
    },
    {
        'id': '2',
        'event': 'Moodle2',
        'poster': 'Joe Bloggs2',
        'location': 'Waterford2',
        'date': '28/10/2022',
        'time': '22:00',
        'link': 'http://moodle2.wit.ie',
        'comments': '[]',
        'upvotes': '12',
    },
  ];

  const stubAPI = {
    getAll: () => {
       return posts;
     },
    add: (t, a, b, c, d, l) => {
         if (!(t && a && b && c && d && l)) return false;
         let id = 1;
         const last = _.last(posts);
         if (last) {
            id = last.id + 1;
         }
         let len = posts.length;
         let newLen = posts.push({
             'id': id,
            'event': t, 'poster': a, 'location': b, 'date': c, 'time': d, 'link': l, 'comments': [], 'upvotes': 0});
          return newLen > len?id:-1;
         },
    upvote: (id) => {
        const index = _.findIndex(posts,
              (post) => {
               return post.id == id;
             } );
        if (index !== -1) {
             posts[index].upvotes += 1;
             return true;
           }
         return false;
      },
    getPost: (id) => {
       let result = null;
       const index = _.findIndex(posts,
              (post) => {
               return post.id == id;
             } );
        if (index !== -1) {
           result = posts[index];
               }
       return result;
       },
    addComment: (postId, co, n) => {
       let result = false;
       const post = stubAPI.getPost(postId);
       let id = 1;
       if (post) {
       const last = _.last(post.comments);
       if (last) {
          id = last.id + 1;
       }
       post.comments.push({'id': id,
                'comment': co, 'name': n, 'upvotes': 0} );
       result = true;
       }
     return result;
       },
    upvoteComment: (postId, commentId) => {
       let result = false;
       const post = stubAPI.getPost(postId);
       if (post) {
       const index = _.findIndex(post.comments, (co) => {
                 return co.id == commentId;
               });
        if (index !== -1) {
            post.comments[index].upvotes += 1;
            result = true;
           }
         }
       return result;
     },
 };
export default stubAPI;