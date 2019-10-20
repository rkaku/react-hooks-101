import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';


// OperationLogs Reducer
const operationLogs = (state = [], action) => {

  // Action Types
  switch (action.type) {

    // Add
    case ADD_OPERATION_LOG:
      // Log
      const operationLog = {
        description: action.description,
        action: action.operatedAt
      }
      // Update Log State
      return [operationLog, ...state];

    // Delete All
    case DELETE_ALL_OPERATION_LOGS:
      return [];

    // Default
    default:
      return state;
  }
};


export default operationLogs;