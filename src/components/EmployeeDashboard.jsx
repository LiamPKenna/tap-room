import React from 'react';
import Menu from './Menu';

function EmployeeDashboard(props) {
  return (
    <div>
      <Menu 
        employee={true} 
        kegs={props.kegs}
        sellPint={props.sellPint} />
    </div>

  );
}

export default EmployeeDashboard;