import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Reducers
import reducer from "../reducers";

// EventForm Component
import EventForm from './EventForm';
// Events Component
import Events from './Events';


// App Component Function
const App = () => {

  // useReducer
  const [state, dispatch] = useReducer(reducer, []);

  // App Component -> Props -> State, Actions
  return (
    <>
      <EventForm state={ state } dispatch={ dispatch } />
      <Events state={ state } dispatch={ dispatch } />
    </>
  );
};


export default App;