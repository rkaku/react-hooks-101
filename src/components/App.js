import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from "../reducers";


const App = () => {

  // Initial State Object
  const initialState = {
    events: [],
    operationLogs: []
  }

  // State & Actions Object <- useReducer <- Reducer Objects
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <EventForm />
      <Events />
    </AppContext.Provider>
  );
};


export default App;