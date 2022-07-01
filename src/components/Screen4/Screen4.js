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
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import SubNavBar from '../SubNav';

export default function Screen4() {
  const navigate = useNavigate();

  return (
    <div>
        <TopNavBar/>
        <SubNavBar>
         <span>
            Configure a new door{" "}
            <span style={{ marginLeft: 10, fontSize: "12px", color: "#E4E4E4" }}>
                2 of 3
            </span>{" "}
          </span>
        </SubNavBar>
        <div className='d-flex justify-content-center'>
          <Card className='w-75 mt-3 '>
            <Card.Header style={{backgroundColor:'#E4E4E4'}} as="h5">Featured</Card.Header>
            <Card.Body>
              <Container>
                <Row className='mt-4'>
                  <Col sm={2} xm={12}></Col>
                  <Col sm={3} xm={12}>
                    <span>Assembly Type</span>
                  </Col>
                  <Col sm={5} xm={12}>
                    <select>
                      <option>Complete Door</option>
                      <option>Residential Door</option>
                    </select>
                  </Col>
                  <Col sm={2} xm={12}></Col>
                </Row>

                <Row className='mt-2 d-flex justify-content-center'>
                {/* <Col sm={2} xm={12}></Col> */}
                <Col sm={3} xm={12}>
                  <span>
                    Measure Size{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <Row className='mt-2'>
                    <Col md={3} sm={12}>
                      <span>Width</span>
                    </Col>
                    <Col md={4} sm={6}>
                      <select>
                        <option>8 ft.</option>
                        <option>9 ft.</option>
                      </select>
                    </Col>
                    <Col md={5} sm={6}>
                      <select>
                        <option>2 in.</option>
                        <option>3 in.</option>
                      </select>
                    </Col>
                  </Row>
                  <Row className='mt-2'>
                    <Col md={3} sm={12}>
                      <span>Height</span>
                    </Col>
                    <Col md={4} sm={6}>
                      <select>
                        <option>8 ft.</option>
                        <option>9 ft.</option>
                      </select>
                    </Col>
                    <Col md={5} sm={6}>
                      <select>
                        <option>2 in.</option>
                        <option>3 in.</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Windcode{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>WindCode W1</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Design <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>CC</option>
                    <option>DD</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Color <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Dark Finish</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              </Container>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex justify-content-center'>
          <Card className='w-75 mt-3 '>
            <Card.Header style={{backgroundColor:'#E4E4E4'}} as="h5">Featured</Card.Header>
            <Card.Body>
              <Container>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Glass Type{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Solid (No Windows)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Section(s) Glazed <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Sections 4</option>
                    <option>DD</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Framing <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Arch 1 Design</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              </Container>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex justify-content-center'>
          <Card className='w-75 mt-3 '>
            <Card.Header style={{backgroundColor:'#E4E4E4'}} as="h5">Featured</Card.Header>
            <Card.Body>
              <Container>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Glass Type{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Solid (No Windows)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Glass Type{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Solid (No Windows)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Glass Type{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Solid (No Windows)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Section(s) Glazed <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Sections 4</option>
                    <option>DD</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                  Framing <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Arch 1 Design</option>
                    <option>Black</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              </Container>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex justify-content-center'>
          <Card className='w-75 mt-3 '>
            <Card.Header style={{backgroundColor:'#E4E4E4'}} as="h5">Featured</Card.Header>
            <Card.Body>
              <Container>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Lock <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>Inside Slide Lock (#2)</option>
                    <option>Residential Door</option>
                  </select>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    MISC Lock Options{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <Form.Check checked type={"radio"} id={`inline-radio-2`} label={`No Lock Hole`} />
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Packaging{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <select>
                    <option>[x] Distributor</option>
                    <option>Black</option>
                  </select>
                  <span style={{ color: "#D50000" }}>
                    <InfoIcon /> &nbsp; Clopay CWD Models Excludes
                    Packaging Options
                  </span>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              <Row className='mt-2'>
                <Col sm={2} xm={12}></Col>
                <Col sm={3} xm={12}>
                  <span>
                    Additional Options{" "}
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </span>
                </Col>
                <Col sm={5} xm={12}>
                  <Row className='mt-2'>
                    <Col md={6} sm={12}>
                      <Form.Check
                        checked
                        type={"checkbox"}
                        label={`Extra Strut(s)`}
                      />
                    </Col>
                    <Col md={6} sm={12}>
                      <select>
                        <option>5 Extra Struts</option>
                        <option>Black</option>
                      </select>
                    </Col>
                    <Col sm={12} xm={12}>
                      <Form.Check
                        checked
                        type={"checkbox"}
                        label={`Spade Strap Hinge(s)`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        checked
                        type={"checkbox"}
                        label={`14 GA Quiet Hinge`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Less Bottom Astragal`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Gold Bar Gurantee ( Select Dealers )`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Medallion Hardware Upgrade`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check type={"checkbox"} label={`Light Seal Kit`} />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`Slide Lock Mounted at 54”`}
                      />
                    </Col>
                    <Col sm={12} xm={12} className='mt-3'>
                      <Form.Check
                        type={"checkbox"}
                        label={`2 Spear Lift Handles`}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={2} xm={12}></Col>
              </Row>
              </Container>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex justify-content-center mb-5'>
          <Card className='w-75 mt-3  pb-2'>
          <Row className='mt-2'>
                <Col sm={11} xm={12}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                     onClick={() => navigate("/preview")} 
                      variant='outline-light'
                      style={{
                        border: "1px solid #66332B",
                        color: "#66332B",
                        marginRight: 10,
                      }}
                    >
                      PREVIEW
                    </Button>

                    <Button
                      variant='light'
                      style={{ color: "#FFF", backgroundColor: "#66332B" }}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </Col>
                <Col sm={1} xm={12}></Col>
              </Row>
          </Card>
        </div>
    </div>
  )
}
