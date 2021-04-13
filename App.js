import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

export default function App() {

    const [lessons, setLessons] = useState([]);

    let fetchSubscribedLessonsAsync = async () => {
        fetch('https://simple-memorizer-api.loca.lt/api/lessons/subscribed?api_token=admin-example-com-api-token')
            .then(response => response.json())
            .then(data => setLessons(data))
            .catch(e => console.log(e))

        console.log(lessons)
    }

    let fetchOwnedLessonsAsync = async () => {
        fetch('https://simple-memorizer-api.loca.lt/api/lessons/owned?api_token=admin-example-com-api-token')
            .then(response => response.json())
            .then(data => setLessons(data))
            .catch(e => console.log(e))

        console.log(lessons)
    }

    // todo render as a div with buttons
    let renderLessons = ({item}) => {
        return <Text>{item.name}</Text>
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={fetchSubscribedLessonsAsync}>
                <Text style={styles.button}>List subscribed lessons</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={fetchOwnedLessonsAsync}>
                <Text style={styles.button}>List owned lessons</Text>
            </TouchableOpacity>

            <FlatList
                data={lessons}
                renderItem={renderLessons}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
