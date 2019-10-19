import React from 'react';


// Event Component Function
const Event = ({ dispatch, event }) => {
  // Event ID
  const id = event.id;
  // Delete Method
  const handleClickDeleteButton = () => {
    // Confirm
    const result = window.confirm(`イベント（ID: ${ id }）を削除してもいいですか？`);
    // Delete Action
    if (result) {
      dispatch({
        type: "DELETE_EVENT",
        id,
      });
    }
  };

  // Event Component
  return (
    <tr>
      <td>{ id }</td>
      <td>{ event.title }</td>
      <td>{ event.body }</td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={ handleClickDeleteButton }>
          削除
        </button>
      </td>
    </tr>
  );
}

export default Event;