import React, {Component, Fragment} from "react";
import './comment.css';

export default class Comment extends Component {
    handleVote = () => {
        this.props.upvoteHandler(this.props.comment.id);
    };
    render() {
        return(
            <Fragment>
                <span className = "commentitem">
                    {`${this.props.comment.comment}(by ${this.props.comment.name})`}
                </span>
                <span className = "ptr" onClick = {this.handleVote}>
                    <button className="glyphicon glyphicon-thumbs-up btn-md">Like</button> 
                    {`${this.props.comment.upvotes}`} 
                </span>
                <p></p>
            </Fragment>
        );
    }
}