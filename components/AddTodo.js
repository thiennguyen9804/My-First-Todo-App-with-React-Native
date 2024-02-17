import React, {useState, useRef} from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const textInputRef = useRef();
    const [text, setText] = useState('');

    const changeTextHandler = (val) => setText(val);
    const pressHandler = () => {
        submitHandler(text);
        setText('');
        textInputRef.current.focus();
    };

    return (
        <View>
            <TextInput
                ref={textInputRef}
                style={styles.input}
                placeholder="Your task goes here..."
                onChangeText={changeTextHandler}
                value={text}
            />
            <Button onPress={pressHandler} title="add todo" color='coral'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },


})