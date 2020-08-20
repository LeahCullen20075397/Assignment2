import React, {Component, Fragment} from 'react';
import './eventItem.css';
import {Link} from 'react-router-dom';
import '../../App.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import api from '../../dataStore/stubAPI';
import buttons from '../../config/buttonConfig';

export default class EventItem extends Component {
state = {
    status: "",
    poster: this.props.post.poster,
    location: this.props.post.location,
    date: this.props.post.date,
    time: this.props.post.time,
    previousDetails: {
        poster: this.props.post.poster,
        location: this.props.post.location,
        date: this.props.post.date,
        time: this.props.post.time
    }
}

    handleVote = () => this.props.upvoteHandler(this.props.post.id);
    deleteVote = () => this.props.deleteHandler(this.props.post.id);
    handleEdit = () => this.setState({status: "edit"});
    handleCancel = () => {
        let {poster, location, date, time} = this.state.previousDetails;
        this.setState({status: "", poster, location, date, time});
    };
    handlePosterChange = e => this.setState({poster: e.target.value});
    handleLocationChange = e => this.setState({location: e.target.value});
    handleDateChange = e => this.setState({date: e.target.value});
    handleTimeChange = e => this.setState({time: e.target.value});
    handleSave = e => {
        e.preventDefault();
        let updatedPoster = this.state.poster.trim();
        let updatedLocation = this.state.location.trim();
        let updatedDate = this.state.date.trim();
        let updatedTime = this.state.time.trim();
        if (!updatedPoster || !updatedLocation || !updatedDate || !updatedTime) {
            return;
        }
        let {poster, location, date, time} = this.state;
        this.setState({ status: "", previousDetails: { poster, location, date, time}});
        api.update(this.state.previousDetails.date, updatedPoster, updatedLocation, updatedDate, updatedTime);
    };
    render() {
        let line = this.props.post.link ? (
            <a href = {this.props.post.link}>{this.props.post.event}</a>
        ):(
            <span>{this.props.post.event}</span>
        );
        let activeButtons = buttons.normal;
        let rightButtonHandler = this.handleEdit;
        let leftButtonHandler = this.handleEdit;
        if (this.state.status === "edit") {
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleSave;
        }
        return (
            <Fragment>
            <div className="d-flex flex-column" class="container "  style={{backgroundColor:'#75B9C0', margin:'10px', borderRadius: '15px'}}>
                <p></p>
                    <ButtonGroup size='lg' >
                        <Button  style={{backgroundColor: '#F196B4'}} className = "eventitem">{line}</Button>
                        <Button  style={{backgroundColor: '#69C494'}} > <Link to={`/posts/${this.props.post.id}`}> Comments</Link></Button>
                        <Button  variant="primary" onClick = {this.handleVote} className="ptr glyphicon glyphicon-thumbs-up btn-md">Like  {`${this.props.post.upvotes}`} </Button>
                    </ButtonGroup>
                <p></p>
            
            {this.state.status === "edit" ? (
                <Fragment>
                    <p>
                        <input
                            type = "text"
                            className = "form-control"
                            value = {this.state.poster}
                            onChange = {this.handlePosterChange}
                            required
                        />
                    </p>
                    <p>
                        <input
                            type = "text"
                            className = "form-control"
                            value = {this.state.date}
                            onChange = {this.handleDateChange}
                            required
                        />
                    </p>
                    <p>
                        <input
                            type = "text"
                            className = "form-control"
                            value = {this.state.time}
                            onChange = {this.handleTimeChange}
                            required
                        />
                    </p>
                    <p>
                        <input
                            type = "text"
                            className = "form-control"
                            value = {this.state.location}
                            onChange = {this.handleLocationChange}
                            required
                        />
                    </p>
                <span>
                    <Button variant="danger"className = "glyphicon glyphicon-remove btn-md" onClick={this.deleteVote}>Delete</Button>
                </span>
                <p></p>
                </Fragment>
            ) : (
                <Fragment>
                 <ul class="list-group">
                         <li class="list-group-item"><b>Posted by: {this.props.post.poster}</b></li>
                        <li class="list-group-item"><i>{this.props.post.date}</i></li>
                        <li class="list-group-item"><i>{this.props.post.time}</i></li>
                        <li class="list-group-item"><i>{this.props.post.location}</i></li>
                        
                    </ul>
                </Fragment>
                )}
                <div> 
                <button
                type = "button"
                className = {"btn w-300 " + activeButtons.rightButtonColor}
                onClick = {rightButtonHandler}
                >
                    {activeButtons.rightButtonVal}
                </button>
                <button
                type = "button"
                className = {"btn w-300 " + activeButtons.leftButtonColor}
                onClick = {leftButtonHandler}
                >
                    {activeButtons.leftButtonVal}
                </button>
                </div> 
            </div>
        </Fragment>
    );
    }
}