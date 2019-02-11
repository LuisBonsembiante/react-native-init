import {EMPLOYEE_FETCH_SUCCES} from "../components/actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCES:
            return action.payload;
        default:
            return state;
    }
};