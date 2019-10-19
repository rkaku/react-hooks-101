import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// App Component Function
const App = () => {
  // App Component
  return (
    <div className='container'>
      <br/>
      <h3 className="text-center">イベント作成フォーム</h3>

      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>内容</label>
          <textarea className='form-control' id='formEventBody' />
        </div>

        <button className='btn btn-primary'>イベントを作成する</button>
        <button className='btn btn-danger'>全てのイベントを削除する</button>

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