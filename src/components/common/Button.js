import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPressButton, children}) => {

    return (
        <TouchableOpacity onPress={ onPressButton } style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export {Button};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf:'center',
        color: '#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom: 10
    }

});