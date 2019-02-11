import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED, LOGIN_USER_FAILED, LOGIN_USER} from "./types";
import firebase from '@firebase/app';
import auth from '@firebase/auth';
import {Actions} from 'react-native-router-flux';

export const emailChanged = (text) => {

    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {

    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSucces(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        loginUserSucces(dispatch, user);
                        Promise.resolve();
                    }).catch(()=>{
                    loginUserFail(dispatch);
                    Promise.resolve();
                })
            });
    };


};

const loginUserFail = (dispatch) => {

    dispatch({
        type: LOGIN_USER_FAILED
    });
};

const loginUserSucces = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};