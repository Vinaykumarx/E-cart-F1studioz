import React from 'react'
import TopNavBar from '../Screen1/TopNavBar'
import Card from 'react-bootstrap/Card';
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  Form,
} from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from "react-router-dom";
import SubNavBar from '../SubNav';

export default function Screen5() {
  const navigate = useNavigate();

  return (
    <div>
        <TopNavBar/>
        <SubNavBar>
         <span>
         Classic_John45012{" "}
            <span style={{ marginLeft: 10, fontSize: "12px", color: "#E4E4E4" }}>
            Cart #123456723
            </span>{" "}
          </span>
        </SubNavBar>
        <Container>
        <div className='d-flex justify-content-center'>
          <Card className='w-90 mt-3 '>
            <Card.Body>
              
              {/* <Button variant="primary">Go somewhere</Button> */}
              <Row className='mt-2'>
              <Card.Title style={{color:'#34495E'}}>10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE
                  OBSCURE, 5TH GENERATION FINISH WALDER DOOR</Card.Title>
                <span className='caption'>
                  Job Name: Front door with glass{" "}
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: "#66332B" }}
                  >
                    Change
                  </span>
                </span>

                <span className='caption'>Product #CWD • Garage Door</span>
                <span>
                  Availability:{" "}
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: "#17A85F" }}
                  >
                    {" "}
                    IN STOCK
                  </span>{" "}
                  (Available for Pickup)
                </span>
              </Row>
              <Row>
                <Col sm={12} md={4} className='d-flex flex-row justify-content-sm-center mt-4'>
                  <Button
                    variant='outline-light'
                    style={{
                      border: "1px solid #8894A0",
                      color: "#66332B",
                      marginRight: 10,
                      background: "#F6F8FA",
                      width: 40,
                      height: 40,
                    }}
                  >
                    -
                  </Button>
                  <Button
                    variant='outline-light'
                    style={{
                      border: "1px solid #8894A0",
                      color: "#66332B",
                      marginRight: 10,
                      width: 100,
                      height: 40,
                    }}
                  >
                    1
                  </Button>
                  <Button
                    variant='outline-light'
                    style={{
                      border: "1px solid #8894A0",
                      color: "#66332B",
                      marginRight: 10,
                      background: "#F6F8FA",
                      width: 40,
                      height: 40,
                    }}
                  >
                    +
                  </Button>
                </Col>
                <Col sm={12} md={4} className='mt-4 d-flex flex-column alignJustifyCenter'>
                  <p className='text-success'>Standard Multiplier: .432</p>
                  <p className='text-success'>Secondary Multipliers Applied</p>
                </Col>
                <Col sm={12} md={4} className='mt-4'>
                  <span className='d-flex flex-row justify-content-sm-center justify-content-lg-end'>
                    Net Price :{" "}
                    <span
                      style={{
                        fontSize: 22,
                        fontWeight: 600,
                        color: "#2A292A",
                      }}
                    >
                      $4500.00
                    </span>{" "}
                  </span>
                  {/* <br /> */}
                  <span  className='d-flex flex-row justify-content-sm-center justify-content-lg-end'>Unit Price : $4800.00</span>
                  {/* <br /> */}
                  <span  className='d-flex flex-row justify-content-sm-center justify-content-lg-end' style={{ fontSize: 12, color: "#66332B" }}>
                    View Price Details
                  </span>
                </Col>
              </Row>
              <Row className='p-4 '>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <FavoriteIcon /> <span>Favorites</span>
                  </div>
                </Col>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <CreateIcon /> <span>Edit</span>
                  </div>
                </Col>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <ContentCopyIcon /> <span>Copy</span>
                  </div>
                </Col>
                <Col sm={6} md={3} className='p-0 m-0'>
                  <div className='customBtn alignJustifyCenter'>
                    <DeleteIcon /> <span>Delete</span>
                  </div>
                </Col>
              </Row>
              
            </Card.Body>
          </Card>
        </div>
        <Row className='mt-1'>
              <Col sm={12} md={6}>
                <Card className=' mt-3'>
                 <Card.Body>
                    <div className=' pb-4'>
                    <span>Change Delivery Date</span>
                    <br />
                    <input type='datetime-local' />
                    <br />
                    <span>Standard Delivery: Tue May 28 - 2019</span>
                    </div>
                 </Card.Body>
                </Card>
                <Card className=' mt-3'>
                 <Card.Body>
                 <div className=' pb-4'>
                  <span>Purchase Order Number</span>
                  <br />
                  <input type='text' />
                  <br />
                  <span>This PO will be useful to track this order items </span>
                </div>
                 </Card.Body>
                </Card>
                
              </Col>
              <Col sm={12} md={6}>
              <Card className=' mt-3'>
                 <Card.Body>
                    <div className=''>
                    <span>Bill Summary</span> <br />
                    <div className=''>
                        <span>Sub Total</span>
                        <span>$ 4500.00</span>
                    </div>
                    <div className=''>
                        <span>Energy Surcharge</span>
                        <span>$ 70.18</span>
                    </div>
                    <div className=''>
                        <span>Sales Tax</span>
                        <span>$ 490.93</span>
                    </div>
                    <div className=''>
                        <h6>Total</h6>
                        <h6>$ 5061.11</h6>
                    </div>
                    <hr />
                    <Form.Check checked type={"checkbox"} label={`Apply Tax`} />
                    <span>
                        (The 1% iStore discount is calculated into the total price
                        for all doors and door parts. Please refer to the quote or
                        order acknowledgment for details.)
                    </span>
                    </div>
                 </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col sm={12} md={12}>
              <Card className=' mt-3'>
                 <Card.Body>
                 
                <div className=''>
                  <Row>
                    <Col sm={12} md={6} className=''>
                      <span>Billing to</span>
                      <div className='rightBorder'>
                        <h6>Bement Jared</h6>
                        <p>
                          144 Curt Shores, 50, Madison Avenue Hixson - 42040
                        </p>
                        <p>Contact: (123) 456 7890</p>
                      </div>
                    </Col>
                    <Col sm={12} md={6} className=''>
                      <span>Shipping To</span>
                      <div>
                        <h6>Bement Jared</h6>
                        <p>
                          144 Curt Shores, 50, Madison Avenue Hixson - 42040
                        </p>
                        <p>Contact: (123) 456 7890</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                 </Card.Body>
                </Card>
                <Card className=' mt-3'>
                 <Card.Body>
                <div
                  className='btnBox '
                  style={{ backgroundColor: "#fff" }}
                >
                  <Row className='mt-2'>
                    <Col sm={4} xm={12}>
                      <div className=''>
                        <span>1 Item</span>
                        <div>
                          <h6>$5061.11</h6>
                        </div>
                      </div>
                    </Col>

                    <Col sm={8} xm={12}>
                      <div style={{ textAlign: "right" }}>
                        <Button
                          variant='outline-light'
                          style={{
                            border: "1px solid #66332B",
                            color: "#66332B",
                            marginRight: 10,
                          }}
                        >
                          Add more
                        </Button>

                        <Button
                          variant='light'
                          style={{ color: "#FFF", backgroundColor: "#66332B" }}
                        >
                          Place Order
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                 </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>

    </div>
  )
}
