import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCES, EMPLOYEE_SAVE_SUCCES} from "./types";
import auth from '@firebase/auth';
import firebase from '@firebase/app';
import database from '@firebase/database';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE});
                Actions.main({type: 'reset'})
            });
    }

};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEE_FETCH_SUCCES, payload: snapshot.val()})
            });
    };
};


export const employeeSave = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_SAVE_SUCCES});
                Actions.main({type: 'reset'})
            });
    }

};

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.main({type: 'reset'})
            });
    }

};