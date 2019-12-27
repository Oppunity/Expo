import React, { Component } from 'react';
import { Text } from 'react-native';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CommentAdd from './CommendAdd';
import Comment from './Comment'

import { timingSafeEqual } from 'crypto';


class CommentGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            comments: [
                {id:1, body: "this is my first comment"},
                {id: 2, body: "this is my second comment"}
            ]
        }
    }

handleCommentSubmit(data){
    const postData = {
        comment: data
    };

axios.post('/api/comment/save', postData).then(response => {
    
    let comments = this.state.comments;
    comments.unshift({
        id: comments.length+1,
        body: response.data.comment
    });
    this.setState({comments:comments});
});

renderComments(){
    const { comments } = this.state;

     return comments.map(comment => {
        const{id,body} = comment;

        return(
            <Comment key = {id} body = {body}/>
           
        );
    })
}

}
render() {
    return (
        <Text> 
        {this.renderComments}
        <CommentAdd handleCommentSubmit = {this.handleCommentSubmit}/>

        </Text>
    );
}

}
export default CommentGroup;