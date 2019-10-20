import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from "../utils";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';


const EventFrom = () => {

  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = event => {
    event.preventDefault();
    // Create
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    // Add Log
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601
    });
    // Clear
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (event) => {
    event.preventDefault();
    // Confirm
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？');

    if (result) {
      // Delete All
      dispatch({ type: DELETE_ALL_EVENTS });
      // Add Log
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601
      });
    }
  };

  const unCreatable = title === '' || body === '';

  return (
    <>
      <br></br>
      <header className='container-'>
        <h4 className="text-center">イベント作成フォーム</h4>
      </header>

      <div className='container'>
        <form>
          <div className='form-group'>
            <label htmlFor='formEventTitle'>タイトル</label>
            <input
              className='form-control'
              id='formEventTitle'
              value={ title }
              onChange={ event => {
                setTitle(event.target.value);
              } }
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formEventBody'>内容</label>
            <textarea
              className='form-control'
              id='formEventBody'
              value={ body }
              onChange={ event => setBody(event.target.value) }
            />
          </div>

          <div className="container-fluid">
            <div className="row">
              <button className='btn btn-primary col-4' onClick={ addEvent } disabled={ unCreatable } >
                イベントを作成する
            </button>
              <button className='btn btn-danger col-4' onClick={ deleteAllEvents } disabled={ state.events.length === 0 }>
                全てのイベントを削除する
            </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


export default EventFrom;