import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'coral',
        paddingTop: 38
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})