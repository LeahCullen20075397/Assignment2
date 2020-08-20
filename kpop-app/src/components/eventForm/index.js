import React, {Component} from 'react';
import './eventForm.css';

export default class Form extends Component{
    state = {event: '', poster: '', location: '', date: '', time: '', link: ''};

    handleEventChange = (e) => this.setState({event: e.target.value});
    handlePosterChange = (e) => this.setState({poster: e.target.value});
    handleLocationChange = (e) => this.setState({location: e.target.value});
    handleDateChange = (e) => this.setState({date: e.target.value});
    handleTimeChange = (e) => this.setState({time: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.event, this.state.poster, this.state.location,
            this.state.date, this.state.time, this.state.link)
        this.setState({event: '', poster: '', location: '', date: '', time: '', link: ''})
    }

    render() {
        return(
            <form className = "form text-light" style={{borderRadius: '25px', backgroundColor: '#75B9C0'}}>
                <h1><span class="badge" style={{fontSize:'4rem'}}>Add an Event</span></h1>
                <div className = "form-group">
                    <input 
                        type = "text"
                        className = "form-control"
                        placeholder = "Event Name"
                        value = {this.state.event}
                        onChange = {this.handleEventChange}/>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Poster"
                        value = {this.state.poster}
                        onChange = {this.handlePosterChange}/>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Location"
                        value = {this.state.location}
                        onChange = {this.handleLocationChange}/>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Date"
                        value = {this.state.date}
                        onChange = {this.handleDateChange}/>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Time"
                        value = {this.state.time}
                        onChange = {this.handleTimeChange}/>
                </div>
                <div className = "form-group">
                    <input  
                        type = "text"
                        className = "form-control"
                        placeholder = "Link"
                        value = {this.state.link}
                        onChange = {this.handleLinkChange}/>
                </div>
                <button type = "submit" className = "btn btn-primary"
                    onClick = {this.handleSubmit}>Add</button>
            </form>
        );
    }
}