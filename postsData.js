import postModel from './api/posts/postsModel';

const posts = [
    {
        'id': '1',
        'event': 'Moodle',
        'poster': 'Joe Bloggs',
        'location': 'Waterford',
        'date': Date.parse('28/10/2020'),
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
        'date': Date.parse('28/10/2022'),
        'time': '22:00',
        'link': 'http://moodle2.wit.ie',
        'comments': '[]',
        'upvotes': '12',
    },
    {
        'id': '3',
        'event': 'Moodle3',
        'poster': 'Joe Bloggs3',
        'location': 'Waterford3',
        'date': Date.parse('28/10/2023'),
        'time': '23:00',
        'link': 'http://moodle3.wit.ie',
        'comments': '[]',
        'upvotes': '13',
    },
];
export const loadPosts = () => {
    postModel.find({}).remove(function() {
        postModel.collection.insert(posts, (err, docs)=>{
        if (err) {
          console.log(`failed to Load Post Data`);
        } else {
          console.info(`${posts.length} posts were successfully stored.`);
        }
      });
    });
    };