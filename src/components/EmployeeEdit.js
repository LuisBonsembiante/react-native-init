import React, {Component} from 'react';
import {connect} from "react-redux";
import {employeeUpdate, employeeSave, employeeDelete} from "./actions";
import {Button, Card, CardSection, Confirm} from "./common";
import _ from 'lodash';
import EmployeeForm from "./EmployeeForm";
import Comunications from 'react-native-communications';

class EmployeeEdit extends Component {

    state ={showModal: false};

    componentWillMount() {
        _.each(this.props.employee.item, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.item.key})
    }

    onTextPress() {
        const {phone, shift} = this.props;
        Comunications.text(phone, `Your uncoming shift is on ${shift} `);
    }

    onAccept() {
        this.props.employeeDelete({uid: this.props.employee.item.key})
    }

    onDecline() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPressButton={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPressButton={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPressButton={() => this.setState({showModal: !this.state.showModal})}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure?
                </Confirm>
            </Card>
        );


    }
}

const mapStateToProps = state => {

    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};
export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);