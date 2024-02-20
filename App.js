import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';


export default function App() {

    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: 1},
        { text: 'create an app', key: 2},
        { text: 'play on the switch', key: 3},
    ]);

    const pressHandler = (key) => setTodos(prevState => prevState.filter(todo => todo.key !== key));
    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos(prevState => {
                return [
                    {text, key: Math.random().toString(16)},
                    ...prevState
                ];
            })
        } else {
            Alert.alert('OOPS!', 'Your task muse be over 3 characters long', [
                {text: 'Understood!', onPress: () => console.log('alert closed')}
            ]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        padding: 40,
        flex: 1,
    },

    list: {
        marginTop: 20,
        flex: 1,
    }

});
