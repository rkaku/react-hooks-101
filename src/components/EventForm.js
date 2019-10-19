import React, { useState } from 'react';


// EventForm Component Function <- State, Actions <- Props
const EventForm = ({ state, dispatch }) => {

  // useState
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Create Method
  const addEvent = event => {
    event.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  // Delete All
  const deleteAllEvents = (event) => {
    event.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？');

    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  };

  // Disabled Conditions
  const unCreatable = title === '' || body === '';

  // EventForm Component
  return (
    <>
      <br></br>
      <h4 className="text-center">イベント作成フォーム</h4>

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
              <button className='btn btn-danger col-4' onClick={ deleteAllEvents } disabled={ state.length === 0 }>
                全てのイベントを削除する
            </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


export default EventForm;