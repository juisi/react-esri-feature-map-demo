import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import activityReducer from '../../features/activity/activityReducer';
import modalsReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'


const rootReducer = combineReducers({
   form: FormReducer,
   activities: activityReducer,
   modals: modalsReducer,
   auth: authReducer,
   async: asyncReducer,
   toastr: toastrReducer
})

export default rootReducer