import React, { useContext, useState } from 'react';

import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from "../utils";


const EventFrom = () => {

  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = event => {
    event.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = event => {
    event.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？');

    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601
      });
    }
  };

  const unCreatable = title === '' || body === '';

  const deleteAllOperationLogs = event => {
    event.preventDefault();
    const result = window.confirm('操作ログを本当に削除してもいいですか？');

    if (result) {
      dispatch({ type: DELETE_ALL_OPERATION_LOGS });
    }
  };

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
              <button
                className='btn btn-primary col-3'
                onClick={ addEvent }
                disabled={ unCreatable } >
                イベントを作成する
              </button>
              <div className='col-1'></div>
              <button
                className='btn btn-warning col-3 text-secondary'
                onClick={ deleteAllOperationLogs }
                disabled={ state.operationLogs.length === 0 }>
                操作ログを削除する
              </button>
              <div className='col-1'></div>
              <button
                className='btn btn-danger col-'
                onClick={ deleteAllEvents }
                disabled={ state.events.length === 0 }>
                すべてのイベントを削除する
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


export default EventFrom;