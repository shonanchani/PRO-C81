import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CreatePost extends Component{
    render(){
        return(
            <View style = {StyleSheet.container}>
                <Text>Create Post</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});