import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Start a new game</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Select a number!</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        marginTop: 10,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen;