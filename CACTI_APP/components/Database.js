import firebase from './firebase';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';


var geocoords = {
    x: 100,
    y: 108
}
class Database extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0
        };
        this.post = this.post.bind(this);
        this.get = this.get.bind(this);
    }
    post(userId, geo) {
        firebase
            .database()
            .ref('users/' + userId)
            .set({
                x: geo.x,
                y: geo.y
            });
    }
    get(userID) {
        firebase.database().ref('users/' +userID).on('value', (snapshot) => {
            const x = snapshot.val().x;
            const y = snapshot.val().y;
            this.setState({ x: x, y: y });
        });
    }

    render() {
        return (
            <View>
                <Text>
                    Your Coordinates : {this.state.x}, {this.state.y}
                </Text>
                <Button
                    title="Post"
                    color="#f194ff"
                    onPress={() => this.post("MihirBafna",geocoords)}>
                </Button>
                <Button
                    title="Get"
                    color="#f194ff"
                    onPress={() => this.get("MihirBafna")}>
                </Button>
            </View>

        );
    }
}
export default Database;