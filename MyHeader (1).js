import { Header } from 'react-native-elements';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MyHeader extends React.Component{
    render(){
        return(
            <Header 
            centerComponent = {{title: "StoryHub", style:{color:"green", fontSize:20, }}}
            backgroundColor = "yellow"/>
        )
    }
}