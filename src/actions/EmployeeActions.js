import {EMPLOYEE_UPDATE} from './types'

//one action creator to update the form
export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}