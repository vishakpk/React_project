import React from 'react'
import Table from 'react-bootstrap/Table';
import ar from './Array2';
import Carousel from 'react-bootstrap/Carousel';

function Tab2() {
return (
<div>
    {ar.map((Array2)=>{
    console.log(Array2);
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.bleacherreport.net/img/images/photos/002/961/634/hi-res-14297b38df8df1a351b61e8e563fd02e_crop_north.jpg?1404305271&w=3072&h=2048"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6
          "
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
})}
    </div> 
  )

 
}

export default Tab2