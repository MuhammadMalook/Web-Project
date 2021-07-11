import React,{useEffect,useState} from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardColumns, Container, Row, Col } from "react-bootstrap"
function Coursel()
{

  const [details,setDetails] = useState([]);
  

  useEffect(  ()=>
{   
    fetch('/civic').then(data=> data.json()).then(results=> setDetails(results.result))
},[])
return(

    <div>
<Carousel className="mt-1">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/djzufotuv/image/upload/v1625954908/BRV/b1_plkall.png"
      alt="Smart" width={500} height={500}
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/djzufotuv/image/upload/v1625954908/BRV/b1_plkall.png"
      alt="Smart" width={500} height={500}
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/djzufotuv/image/upload/v1625954665/Accord/A3_zqd5uj.png"
      alt="Honda" width={500} height={500}
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/djzufotuv/image/upload/v1625954797/Civic/c10_cnqo70.png"
      alt="Honda" width={500} height={500}
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/djzufotuv/image/upload/v1625954920/spareParts/s9_dx3xho.png"
      alt="cars" width={500} height={500}
    />
  </Carousel.Item>
<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/djzufotuv/image/upload/v1625954655/Accord/A1_cvllg2.png"
      alt="cars" width={500} height={500}
    />
  </Carousel.Item>
</Carousel>


<div className="row ml-5">
                {details.map(itm => {
                    return (
                        <div className="col-sm-4 mt-4 ">
                                <Card style={{ width: '30rem' }}>
                                    <Card.Img variant="top" src={itm.photo} width={418} height={255}/>
                                    <Card.Body>
                                        <Card.Title>Car Name: {itm.name}</Card.Title>
                                        <Card.Title>Car Price: {itm.price}</Card.Title>
                                  
                                            </Card.Body>
                                </Card>
                            
                        </div>
                    )
                })}

            </div>
    </div>


)

} 
 export  default Coursel;