import React from 'react';
// Event Component
import Event from "./Event";


// Events Component Function <- State, Actions <- Props
const Events = ({ state, dispatch }) => {

  // Events Component
  return (
    <>
      <div className='container-fluid'>
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
            {
              state.map((event, index) => (
                <Event key={ index } event={ event } dispatch={ dispatch } />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};


export default Events;