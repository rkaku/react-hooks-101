import React, { useContext } from 'react';
// App Context
import AppContext from '../contexts/AppContext';
// Time
import { timeCurrentIso8601 } from "../utils";
// Actions
import {
  ADD_OPERATION_LOG,
  DELETE_EVENT
} from '../actions';


// Event Component Function
const Event = ({ event }) => {

  // Actions <- useContext <- App Context
  const { dispatch } = useContext(AppContext);
  // Event ID
  const id = event.id;

  // Delete Method
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント（ID: ${ id }）を削除してもいいですか？`);

    if (result) {
      // Delete Event
      dispatch({
        type: DELETE_EVENT,
        id,
      });
      // Add Log
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${ id })を削除しました。`,
        operatedAt: timeCurrentIso8601
      });
    }
  };

  // Event Component
  return (
    <tr>
      <td>{ id }</td>
      <td>{ event.title }</td>
      <td>{ event.body }</td>
      <td>
        <button
          type='button'
          className='btn btn-light text-danger'
          onClick={ handleClickDeleteButton }>
          削除
        </button>
      </td>
    </tr>
  );
}


export default Event;