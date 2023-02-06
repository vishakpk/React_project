import React from 'react'
import Array3 from './Array3'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function Tab3() {
    const Array3=[{Number:1,Name:"Aju", Age:"22", Qualification:"CS"},
          {Number:2,Name:"Kuttan", Age:"22", Qualification:"MEC"},
          {Number:3,Name:"Dasan", Age:"22", Qualification:"ELE"}]
  return (
    <div>
        <MDBTable>
      <MDBTableHead>
        <tr>
        <th scope='col'>Number</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Qualification</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Array3.map((ar,aswin)=>{
            console.log(ar);
            return(
        <tr>
          <td>
            <p>{aswin+1}</p>
            <div className='d-flex align-items-center'>
              
              <div className='ms-3'>
                <p className='fw-bold mb-1'></p>
                <p className='text-muted mb-0'></p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{ar.Name}</p>
            <p className='text-muted mb-0'></p>
          </td>
          <td>
            <td>
              <p>{ar.Age}</p>
              </td>
          </td>
          <td><p>{ar.Qualification}</p></td>
          <td>
            
          </td>
        </tr>
        
        
        )
        }
        )}
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Tab3