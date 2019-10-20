// Combine Reducers
import { combineReducers } from 'redux';
// Reducers
import events from './events';
import operationLogs from './operationLogs';
// Combine Reducers -> Reducer Objects
export default combineReducers({
  events,
  operationLogs
});