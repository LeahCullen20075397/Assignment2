import React, {Fragment} from 'react';
import Comment from '../comment';

export default({comments, upvoteHandler}) => {
    let items = comments.map(
        (comment, index) =>
            <Comment key = {index}
                comment = {comment} upvoteHandler = {upvoteHandler}
            />
    )
    return(
        <Fragment>
            {items}
        </Fragment>
    )
};