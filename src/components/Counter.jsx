import React from 'react';

function Counter(props) {
  console.log(props);
  
  const checkEmp = () => {    
    if (props.employee) {
      return (<h5>EMPLOYEE!</h5>)
    } else {
      return (<h6>Patron</h6>)
    }
  }
  return (
    <div>
      <p>counter</p>
      {checkEmp()}
    </div>
  );
}

export default Counter;