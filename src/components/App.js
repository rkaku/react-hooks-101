import React, { useReducer, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input
            className='form-control'
            id='formEventTitle'
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>内容</label>
          <textarea
            className='form-control'
            id='formEventBody'
            value={body}
            onChange={event => setBody(event.target.value)}
          />
        </div>

        <button className='btn btn-primary' onClick={addEvent}>
          イベントを作成する
        </button>
        <button className='btn btn-light text-danger'>
          全てのイベントを削除する
        </button>

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
          <tbody></tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
