import React, { useState, Component } from 'react';
import { Text } from 'react-native';

function CommentAdd(props) {
    const { handleCommentSubmit} = props;
    const[comment,setComment] = useState('');

    return(
        <Text> 
            <Text className = "card mt-4 mb-3">
            <Text className = "card-header"> <strong>Comments</strong></Text>
            <Text className = "card-body">
                <textarea name = "comment" className = "form-control" placeholder="Add a new comment"
                onChange={event => setComment(event.target.value)}value={comment}> </textarea>
            
            </Text>

            </Text>
        <Text> 
        <Button className = "btn btn-primary mr-3" onClick={event => {
            handleCommentSubmit(comment);
            setComment('');
            }}>Comment </Button> 

            <Button className = "btn btn-warning"> Close issue</Button>
        </Text>
        
        </Text>

    )

}