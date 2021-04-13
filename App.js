import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {

    let fetchSubscribedLessonsAsync = async () => {
        fetch('https://simple-memorizer-api.loca.lt/api/lessons/subscribed?api_token=admin-example-com-api-token')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }

    let fetchOwnedLessonsAsync = async () => {
        fetch('https://simple-memorizer-api.loca.lt/api/lessons/owned?api_token=admin-example-com-api-token')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={fetchSubscribedLessonsAsync}>
                <Text style={styles.button}>List subscribed lessons</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={fetchOwnedLessonsAsync}>
                <Text style={styles.button}>List owned lessons</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        fontSize: 20,
        color: '#fff'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});
