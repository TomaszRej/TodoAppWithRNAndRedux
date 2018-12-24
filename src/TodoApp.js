import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTodo from "./containers/AddTodo";
import VisibleTodos from './containers/VisibleTodos';

export default class TodoApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodo/>
                <View>
                    <VisibleTodos/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
