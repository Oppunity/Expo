import React , {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import config from "../config";
import { PostFeed } from '../components/container';


class MainFeedPage extends Component {
    render(){
        return(
            <View style = {{flex:1, width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>
                <View style = {styles.tempNav}> 
                    <Text style = {styles.headerText}> Oppunity</Text>
                   
                    </View>
                     <PostFeed/>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101011',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },

  
});


export default MainFeedPage;

