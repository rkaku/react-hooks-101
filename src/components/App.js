import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Reducers
import reducer from "../reducers";
// App Context
import AppContext from '../contexts/AppContext';
// Components
import EventForm from './EventForm';
import Events from './Events';


// App Component Function
const App = () => {

  // Initialize Events Object
  const initialState = {
    events: []
  }
  // State & Actions Object <- useReducer <- Reducers Object
  const [state, dispatch] = useReducer(reducer, initialState);

  // App Component
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <EventForm />
      <Events />
    </AppContext.Provider>
  );
};


export default App;