import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext'

const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext);

  return (
    <>
      <div>{ value }</div>
      {/* <AppContext.Consumer>
        { value => (<div>{ value }</div>) }
      </AppContext.Consumer> */}

      <div className='container-fluid'>
        <h4 className='lead'>イベント一覧</h4>

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
      </div>
    </>
  );
};

export default Events;