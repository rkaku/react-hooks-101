import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Reducers
import reducer from "../reducers";
// App Context
import AppContext from '../contexts/AppContext';
import EventForm from './EventForm';
import Events from './Events';


// App Component Function
const App = () => {

  // useReducer
  const [state, dispatch] = useReducer(reducer, []);

  // App Component
  return (
    <AppContext.Provider value={ 'Hello, I am a Provider.' }>
      <EventForm state={ state } dispatch={ dispatch } />
      <Events state={ state } dispatch={ dispatch } />
    </AppContext.Provider>
  );
};


export default App;