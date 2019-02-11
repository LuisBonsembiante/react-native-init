import React, {Component} from 'react';
import {CardSection, Input} from "./common";
import {Picker, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from "./actions";

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value: value})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value: value})}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTxtStyle}>Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({props: 'shift', value: day})}>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wendsday" value="Wendsday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    pickerTxtStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);