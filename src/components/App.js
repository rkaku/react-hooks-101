import React, { useReducer, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./Event";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

  const deleteAllEvents = (event) => {
    event.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？');

    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  };

  const unCreatable = title === '' || body === '';

  return (
    <>
      <br></br>
      <header className='container-fluid'>
        <h4 className="text-center">イベント作成フォーム</h4>
      </header>

      <form>
        <div className='container'>
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

          <br></br>
          <button className='btn btn-primary col' onClick={ addEvent } disabled={ unCreatable } >
            イベントを作成する
          </button>
        </div>

        <br></br>
        <br></br>
        <div className='container'>
          <h4>イベント一覧</h4>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th>内容</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { state.map((event, index) => (
                <Event key={ index } event={ event } dispatch={ dispatch } />
              )) }
            </tbody>
          </table>

          <br></br>
          <button className='btn btn-danger col' onClick={ deleteAllEvents } disabled={ state.length === 0 }>
            全てのイベントを削除する
        </button>
        </div>
      </form>
    </>
  );
};

export default App;
