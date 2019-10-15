import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer } from "react";

// Context
import AppContext from '../contexts/AppContext';

// Component
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';

// Reducer
import reducer from "../reducers";


// LocalStorage -> Key
const APP_KEY = 'appWithRedux';


const App = () => {
  // LocalStorage -> Get
  const appState = localStorage.getItem(APP_KEY);

  // Data -> Initialize || Restore
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  };

  // Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // LocalStorage -> Set
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  // Component & Context
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <EventForm />
      <Events />
      <OperationLogs />
    </AppContext.Provider>
  );
};


export default App;
