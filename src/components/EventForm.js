import React, { useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';

const EventFrom = ({ state, dispatch }) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = event => {
    event.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (event) => {
    event.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？');

    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === '' || body === '';

  return (
    <>
      <header className='container-fluid'>
        <h4 className="text-center">イベント作成フォーム</h4>
      </header>

      <div className='container-fluid'>
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
              <button className='btn btn-primary col-auto' onClick={ addEvent } disabled={ unCreatable } >
                イベントを作成する
            </button>
              <button className='btn btn-danger col-auto' onClick={ deleteAllEvents } disabled={ state.length === 0 }>
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