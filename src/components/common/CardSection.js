import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from "./Header";


const CardSection = (props) => {

    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }

});

export {CardSection};

