import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Reducers
import reducer from "../reducers";
// App Context
import AppContext from '../contexts/AppContext';
import Events from './Events';
import EventForm from './EventForm';


const App = () => {

  // useReducer
  const [state, dispatch] = useReducer(reducer, []);

  return (
    // App Context Component -> State, Actions
    <AppContext.Provider value={ { state, dispatch } }>
      <EventForm />
      <Events />
    </AppContext.Provider>
  );
};


export default App;