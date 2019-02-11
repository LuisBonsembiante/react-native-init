import React, {Component} from 'react';
import {FlatList, ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from "./actions";
import _ from 'lodash';
import ListIem from './ListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set op profs that this
        this.createDataSource(nextProps);
    }

    createDataSource({employees}) {

        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 != r2
        // });

        this.dataSource = employees;
    }

    renderRow(employee) {
        return <ListIem employee={employee}/>;
    }

    render() {
        return (
            <FlatList
                enableEmptySections
                data={this.dataSource}
                renderItem={this.renderRow}
            />


        );
    }
}

const mapStateToProps = state => {

    const employees = _.map(state.employee, (val, uid) => {
        return {...val, key:uid}; // {shift: 'Monday', name:'s', id:'1j2j34'};
    });
    return {
        employees
    };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);