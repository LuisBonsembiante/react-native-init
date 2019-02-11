import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, CardSection} from "./common";
import {connect} from 'react-redux';
import {employeeCreate, employeeUpdate} from "./actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {


    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate( {name, phone, shift: shift || 'Monday'} );
    }

    render() {

        return (
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button onPressButton={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);