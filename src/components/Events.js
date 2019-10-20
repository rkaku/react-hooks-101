import React, { useContext } from 'react';
import Event from './Event';
// App Context
import AppContext from '../contexts/AppContext'


const Events = () => {

  // State <- useContext <- App Context
  const { state } = useContext(AppContext);

  return (
    <>
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
            {
              state.map((event, index) => (
                <Event key={ index } event={ event } />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};


export default Events;