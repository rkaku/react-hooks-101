import React, { useReducer } from "react";
import reducer from "../reducers";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';

const App = () => {

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <EventForm />
      <Events />
    </AppContext.Provider>
  );
};

export default App;
