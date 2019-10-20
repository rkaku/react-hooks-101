import React, { useContext } from 'react';
// OperationLog Component
import OperationLog from './OperationLog';
// App Context
import AppContext from '../contexts/AppContext';


// OperationLogs Component Function
const OperationLogs = () => {

  // State <- useContext <- App Context
  const { state } = useContext(AppContext);

  // OperationLogs Component
  return (
    <>
      <div className='container-fluid'>
        <h4 className='lead'>操作ログ一覧</h4>
      </div>

      <div className='container-fluid'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>内容</th>
              <th>日時</th>
            </tr>
          </thead>
          <tbody>
            {
              state.operationLogs.map((operationLog, index) => <OperationLog
                key={ index }
                operationLog={ operationLog }
              />)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};


export default OperationLogs;