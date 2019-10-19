import React from 'react';


// Event Component Function -> Dispatch, Event
const Event = ({ dispatch, event }) => {

  // Event ID
  const id = event.id;
  // Delete Method
  const handleClickDeleteButton = () => {
    // Delete Action
    dispatch({
      type: "DELETE_EVENT",
      id,
    });
  };

  // Event Component
  return (
    // Table Data
    <tr>
      <td>{ id }</td>
      <td>{ event.title }</td>
      <td>{ event.body }</td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={ handleClickDeleteButton }
        >
          削除
        </button>
      </td>
    </tr>
  );
}


export default Event;