import {EMPLOYEE_CREATE, EMPLOYEE_UPDATE, EMPLOYEE_SAVE_SUCCES} from "../components/actions/types";

const INITIAL_STATE = {name:'', phone:'', shift:''};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === {prop: 'name', value: 'jane'}
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCES:
            return INITIAL_STATE;
        default:
            return state;
    }
};