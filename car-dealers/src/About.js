import React from 'react';
import { Accordion , Card , Button} from 'react-bootstrap';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 function About()
{
    return(
        <div className="mt-2">
        <img src="https://di-uploads-pod32.dealerinspire.com/hondacarland/uploads/2020/12/Screen-Shot-2020-12-18-at-8.54.22-AM.png" alt="map"/>   
        <Accordion defaultActiveKey="0">
        
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        About Project!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><b>Car DealerShip WebApplication<br/>supervisor: Khalid Hussain detho</b>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        About Project Members!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><b>Muhammad Malook <br/>Sumia sami <br/>Mahnoor Memon<br/>
      we have developed this website using ReactJs , React-bootstrap , EmailJS, NodeJS as a backend</b>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Profile of Honda Car DealerShip
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body><b>We always strive to give outstanding service to our valued customers. In addition to providing regular service to customers, the company also regularly conducts Service Campaigns to facilitate customer's need for service. This has given our customers absolute confidence in our cars which is clearly evident from the ever increasing sale volumes.

It is the constant endeavor of Honda Atlas Cars (Pakistan) Limited to achieve No .1 Customer satisfaction. Honda Atlas Cars (Pakistan) Limited is committed to meet customer expectations and to provide good value for money.

Currently, we are offering Honda Accord, Honda CR-V, Honda Civic (four variant), Honda BR-V, Honda City Aspire (two variant), and Honda City (four variant) in wide range of colors with advanced technological features.</b>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>

        </div>
    )
}
export default About