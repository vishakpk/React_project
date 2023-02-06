import React from 'react'
import Table from 'react-bootstrap/Table';
import ar from './Array1';

function Tab1() {
return (
<div>
    {ar.map((item)=>{
    console.log(item);
    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rollno</th>
          <th>Department</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.Name}</td>
          <td>{item.Rollno}</td>
          <td>{item.Department}</td>
          <td>{item.Result}</td>
        </tr>
      </tbody>
    </Table>
    )
})}
    </div> 
  )

 
}

export default Tab1