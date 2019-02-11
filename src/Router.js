import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import {Actions} from 'react-native-router-flux';
import EmployeeEdit from "./components/EmployeeEdit";

const RouterComponent = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar>
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial></Scene>
                </Scene>
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee">

                </Scene>
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee">

                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;