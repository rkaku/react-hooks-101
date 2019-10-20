import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer } from "react";
// App Context
import AppContext from '../contexts/AppContext';
// Reducers
import reducer from "../reducers";
// Component
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';


// Local Storage Key
const APP_KEY = 'appWithRedux';


// App Component Function
const App = () => {

  // Local Storage -> Get
  const appState = localStorage.getItem(APP_KEY);

  // State Object <- Local Storage || []
  const initialState =
    // Local Storage ? Data Object : []
    appState ? JSON.parse(appState) : {
      events: [],
      operationLogs: []
    };

  // State, Actions <- useReducer <- Reducers Object
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect <- Function, State
  useEffect(() => {
    // Local Storage -> Set
    localStorage.setItem(
      // Key, Value
      APP_KEY, JSON.stringify(state)
    );
    // State
  }, [state]);

  // App Component
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <EventForm />
      <Events />
      <OperationLogs />
    </AppContext.Provider>
  );
};


export default App;