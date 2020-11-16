import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
});
export default class Home extends Component {
    render() {
        return (
            <View style={styles.button}>
                <Button 
                    title="Go to Database Demo"
                    onPress={() => this.props.navigation.navigate('Database')}
                />
                <Button
                    title="Go to Map"
                    onPress={() => this.props.navigation.navigate('Map')}
                />
            </View>
        )
    }
}