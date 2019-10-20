import React from 'react';


// OperationLog Component Function
const OperationLog = ({ operationLog }) => {
  // OperationLog Component
  return (
    // Table Data
    <tr>
      <td>{ operationLog.description }</td>
      <td>{ operationLog.operatedAt }</td>
    </tr>
  );
};


export default OperationLog;