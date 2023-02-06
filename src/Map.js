import React from 'react'
import { Carousel } from 'react-bootstrap';
import Array2 from './Array2'

function Map() {
  return (
    <div>
      
                <Carousel>
                {Array2.map((val)=>{
            console.log(val);
            return(
      <Carousel.Item>
       
     
     
        <img style={{height:"600px"}} className="d-block w-100" src={val.Image} alt="Second slide"/>
        <Carousel.Caption>
        <h1>{val.Name}</h1>
        <h1>{val.Rollno}</h1>
        <h1>{val.place}</h1>
            

        </Carousel.Caption>
        


      </Carousel.Item>
      
 
      )
        })}
    </Carousel>
        
    </div>
  )
}

export default Map