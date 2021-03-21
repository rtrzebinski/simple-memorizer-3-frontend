import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {

    let fetchSubscribedLessonsAsync = async () => {
        fetch('https://simple-memorizer-api.loca.lt/api/lessons/subscribed?api_token=admin-example-com-api-token')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={fetchSubscribedLessonsAsync}
                style={{backgroundColor: 'blue'}}>
                <Text style={{fontSize: 20, color: '#fff'}}>List subscribed lessons</Text>
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
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});
