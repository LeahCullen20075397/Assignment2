import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
        {
            id: 1,
            event: "KPOP World Festival 2019 Ireland",
            poster: "Leah Cullen",
            location: "The Helix - DCU",
            date: "4-July-2019",
            time: "18:00-22:00",
            link: "https://www.eventbrite.ie/e/kpop-world-festival-2019-ireland-tickets-63424205506",
            comments: [],
            upvotes: 10
            },
            {
            id: 2,
            event: "Kpop & Khiphop Party x KEvents in Dublin",
            poster: "Turks Head",
            location: "Turks Head - Parliament Street Temple Bar",
            date: "29-Nov-2019",
            time: "22:00-03:00",
            link: "https://www.facebook.com/events/396661737605767/",
            comments: [],
            upvotes: 12
            },
            {
            id: 3,
            event: "K Music at London Purcell Room",
            poster: "Lisa Kim",
            location: "Purcell Room - London",
            date: "18-Nov-2019",
            time: "Not yet disclosed...",
            link: "https://www.stereoboard.com/k-music-tickets/london",
            comments: [],
            upvotes: 15
            }  
        ];
    }

    update(key, poster, location, date, time){
        let index = _.findIndex(this.posts, post => post.date === key);
        if (index !== -1){
            this.posts[index].poster = poster;
            this.posts[index].location = location;
            this.posts[index].date = date;
            this.posts[index].time = time;
            return true;
        }
        return false;
    }

    getAll() {
        return this.posts;
    }

    add(event, poster, location, date, time, link) {
        let id = 1;
        let last = _.last(this.posts);
        if(last) {
            id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
            id,
            event,
            poster,
            location,
            date,
            time,
            link,
            comments: [],
            upvotes: 0
        });
        return newLen > len;
    }

     find(id) {
         let index = _.findIndex(
             this.posts,
             post => `${post.date}` === id
         );
         if(index !== -1) {
             return this.posts[index];
         }
         return null;
     }

    delete(k) {
        let elements = _.remove(this.posts, post => post.id === k);
        return elements;
    }

    intialize(posts) {
        this.posts = posts;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if(index !== -1) {
            this.posts[index].upvotes += 1;
            return true;
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if(last) {
            id = last.id + 1;
        }
        post.comments.push({id: id, comment: c, name: n, upvotes: 0});
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if(index !== -1) {
            post.comments[index].upvotes += 1;
        }
    }
}

export default new StubAPI();