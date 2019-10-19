import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Events Reducer
import reducer from "../reducers";


// App Component Function
const App = () => {

  // useReducer -> Events Reducer -> State, Actions
  const [state, dispatch] = useReducer(reducer, []);
  // useState -> Title, Body
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // addEvent Method
  const addEvent = event => {
    // Prevent Default
    event.preventDefault();
    // Dispatch
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    // Initialize
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
            value={ title }
            // onChange -> setTitle
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
            // onChange -> setBody
            onChange={ event => setBody(event.target.value) }
          />
        </div>

        {/* onClick -> addEvent -> Dispatch */}
        <button className='btn btn-primary' onClick={ addEvent }>
          イベントを作成する
        </button>
        {/* onClick ->  */}
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