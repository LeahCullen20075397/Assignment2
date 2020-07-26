import React, {Component} from 'react';
import EventList from './components/eventList';
import Form from './components/eventForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class App extends Component {
  state = {filter : ""}
  addEventItem = (event, poster, location, date, time, link) => {
    api.add(event, poster, location, date, time ,link);
    this.setState({});
  };
  incrementUpvote = (id) => {
    api.upvote(id);
    this.setState({});
  };
  deletePost = (key) => {
    api.delete(key);
    this.setState({});
  }
  filter = (posts) => {
    return posts.filter(post => post.event.toLocaleLowerCase().startsWith(this.state.filter.toLocaleLowerCase()));
  }
  updateFilter = (text) => {
    this.setState({filter: text.target.value});
  }
  render() {
    document.body.style= 'background-image: url("https://66.media.tumblr.com/74dbe32d98265cb64e291100117b6d4a/tumblr_inline_n2590ayYaL1qhwjx8.gif")';

    let posts = _.sortBy(api.getAll(), post => -post.upvotes);
    return(
      
      <Container style={{width:"100%"}}>
     <Row>
        <Col sm={4}>
          <Form handleAdd = {this.addEventItem}/>
        </Col>
        <Col sm={8}>
          <EventList posts = {this.filter(posts)} upvoteHandler = {this.incrementUpvote}
            deleteHandler = {this.deletePost} updateFilter={this.updateFilter}/>
        </Col>
      </Row>
      </Container>
    );
  }
}