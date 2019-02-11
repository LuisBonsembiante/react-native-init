import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {CardSection} from "./CardSection";
import {Button} from "./Button";

const Confirm = ({children, visible, onAccept, onDecline}) => {

    const {cardSectionStyle, containerStyle, textStyle} = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}

        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection style={cardSectionStyle}>
                    <Button onPressButton={onAccept}>Yes</Button>
                    <Button onPressButton={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        height: 60


    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});
export {Confirm};