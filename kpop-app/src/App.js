import React, {Component} from 'react';
import EventList from './components/eventList';
import Form from './components/eventForm';
import * as api from './api';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class App extends Component {
  state = {posts: [{}]};

    componentDidMount() {
        api.getAll().then(resp => {
          console.log(resp);
            this.setState({
                posts: resp
            });
            console.log(this.state);
        }).catch(console.error);
    };

  //state = {filter : ""}
  addEventItem = (event, poster, location, date, time, link) => {
    api.add(event, poster, location, date, time, link)
    .then(resp => {
      console.log(this.state);
                  const newPost = {"id":resp.id, "event":event, "poster":poster, "location":location, "date":date, "time":time, "link":link, "upvotes":0, "comments":[]};
                  this.setState({posts: this.state.posts.concat([newPost])});
    })
  };
     
      
  
  incrementUpvote = (id) => {
    api.upvote(id).then(resp=> {
           var upvotedPost = _.find(this.state.posts, post=>post.id == id);
           upvotedPost.upvotes++;  
           this.setState({})
         }) ;
  };
  /*deletePost = (key) => {
    api.delete(key);
    this.setState({});
  }
  filter = (posts) => {
    return posts.filter(post => post.event.toLocaleLowerCase().startsWith(this.state.filter.toLocaleLowerCase()));
  }
  updateFilter = (text) => {
    this.setState({filter: text.target.value});
  }*/
  render() {
    document.body.style= 'background-image: url("https://66.media.tumblr.com/74dbe32d98265cb64e291100117b6d4a/tumblr_inline_n2590ayYaL1qhwjx8.gif")';

    //deleteHandler = {this.deletePost}

   // let posts = _.sortBy(api.getAll(), post => -post.upvotes);
    const posts = _.sortBy(this.state.posts, post =>
    post.upvotes);
    return(
      
      <Container style={{width:"100%"}}>
     <Row>
        <Col sm={4}>
          <Form handleAdd = {this.addEventItem}/>
        </Col>
        <Col sm={8}>
          <EventList posts = {posts} upvoteHandler = {this.incrementUpvote}
            />
        </Col>
      </Row>
      </Container>
    );
  }
}