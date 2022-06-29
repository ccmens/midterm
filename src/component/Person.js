import React from 'react';
import Button from 'react-bootstrap/Button'
import { Card, Row, Col, Container } from "react-bootstrap";


function Person() {

  const cardInfo = [
    {
      image:
        "./s1.png",
      name: "Mike",
      gpa: 3.8
    },
    {
      image:
        './s2.png',
        name: "Manal",
        gpa: 3.6
    },
    {
      image:
        "./s3.png",
        name: "Moe",
        gpa: 3.2
    },
    {
      image:
        "./s4.png",
        name: "Mary",
        gpa: 2.6
    }
  ];
const handleclick = (event) => {
 
    alert("Good Job!");
  
  
}
  
    
 return <div className='grid'>
  <Container>
      <Row xs={1} md={2}> {cardInfo.map((cardInfo,k) => (
        <Col key={k} >
        <Card style={{width:"18rem"}}  className="box">
        <Card.Img variant="top" src={cardInfo.image} />
        <Card.Body>
          <Card.Title>{cardInfo.name}</Card.Title>
          <Card.Text>
            {cardInfo.gpa}
          </Card.Text>
          <Button variant="primary" onClick={handleclick}>Grade</Button>
        </Card.Body>
      </Card>
      </Col>
      ))}</Row>
   
      </Container>
  
 </div>
    
}
export default Person;