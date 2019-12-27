import React, { Component } from 'react';
import { Text } from 'react-native';

class Comment extends Component {
    constructor(props) {
        super(props);

render() {
    const{ body } = this.props;

return(
    <Text> {body} </Text>
);

        }
    }

}
export default Comment; 