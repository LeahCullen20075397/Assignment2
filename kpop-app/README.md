# BSc (Hons.) Level 8 - Assignment 1 -Single Page App.

Name: Leah Cullen-O'Leary 20075397

# Overview

Basic Kpop events app, which allows a user to add an event to a 
list of events. These events can be liked and commented on. The
comments can also be liked. Events can be added. Delete and edit features work.

Features:
- basic routing between comments page and home page
- interactive and dynamic behaviour
- full CRUD functionality
- Can follow links
- data model: stub API; 2 entities
- storybook support

Bugs:
    storybook shows warning about using outside functions. This
    occurred when I imported the <Link> tag. There is no issues when running the developer tool npm.

# Setup

Started off by creating the folders and files I'd need to complete the 
assignment. Then I imported the relevant tools I needed in this project.
I added all the js files I needed and then imported Storybook.

## Data Model Design

![][diagram1]

~~~
import React, {Component} from 'react';
import EventList from './components/eventList';
import Form from './components/eventForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class App extends Component {
  addEventItem = (event, poster, location, date, time, link) => {
    api.add(event, poster, location, date, time ,link);
    this.setState({});
  };
  incrementUpvote = (id) => {
    api.upvote(id);
    this.setState({});
  };
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
          <EventList posts = {posts} upvoteHandler = {this.incrementUpvote}/>
        </Col>
      </Row>
      </Container>
    );
  }
}
~~~
Main page code

## UI Design

![][diagram2]
Here I made a form which could take in details about kpop events.
It then shows the list of events which can be commented on and liked.

![][diagram3]
Here a form is made to take in a user's comment on a particular event.
these comments can also be liked

## Routing

/comments (public) - displays comments on an event

## Storybook

![][diagram4]

## Independent Learning

Used react-bootstrap to style assignment, using w3 schools tutorials

[diagram1]: ./img/diagram1.png
[diagram2]: ./img/diagram2.png
[diagram3]: ./img/diagram3.png
[diagram4]: ./img/diagram4.png

TheRainyGamer is my second older Github. I accidently pushed up to this project on the two accounts
