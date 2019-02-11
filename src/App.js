import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app'
import LoginForm from "./components/LoginForm";
import ReduxThunk from 'redux-thunk';
import Router from './Router';


type Props = {};

class App extends Component<Props> {

    componentWillMount() {

        firebase.initializeApp({
            apiKey: 'AIzaSyAbARnnfUZXV8nDhAUmv9pWNTPy-5p-jDk',
            authDomain: 'manager-dd6a7.firebaseapp.com',
            databaseURL: 'https://manager-dd6a7.firebaseio.com',
            projectId: 'manager-dd6a7',
            storageBucket: 'manager-dd6a7.appspot.com',
            messagingSenderId: '676154374875'
        });


    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
               <Router/>
            </Provider>
        );

    }
}

export default App;

