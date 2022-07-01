import React from 'react'
import {
    Container,
    Row,
    Col,
    OverlayTrigger,
    Tooltip,
    Button,
  } from "react-bootstrap";
import HelpIcon from '@mui/icons-material/Help';
import TopNavBar from '../Screen1/TopNavBar';
import { useNavigate } from "react-router-dom";
import SubNavBar from '../SubNav';


export default function Screen3() {
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
        <div className='mt-4'>
        <Container>
          <div className='detailsBox ' style={{ backgroundColor: "#fff" }}>
            <Row className='mt-2'>
              <Col sm={2} xm={12}></Col>
              <Col sm={3} xm={12}>
                <span>Select Category</span>
              </Col>
              <Col sm={5} xm={12}>
                <select>
                  <option>Residential Door</option>
                  <option>Residential Door</option>
                </select>
              </Col>
              <Col sm={2} xm={12}></Col>
            </Row>
            <Row className='mt-2'>
              <Col sm={2} xm={12}></Col>
              <Col sm={3} xm={12}>
                <span>
                  Select Series{" "}
                  <HelpIcon style={{ color: "#E5E5E5" }} />
                </span>
              </Col>
              <Col sm={5} xm={12}>
                <select>
                  <option>Canyon Ridge® Collection</option>
                  <option>Residential Door</option>
                </select>
              </Col>
              <Col sm={2} xm={12}></Col>
            </Row>
            <Row className='mt-2'>
              <Col sm={2} xm={12}></Col>
              <Col sm={3} xm={12}>
                <span>
                  Door Type{" "}
                  <OverlayTrigger
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>Tooltip on</Tooltip>}
                  >
                    <HelpIcon style={{ color: "#E5E5E5" }} />
                  </OverlayTrigger>
                </span>
              </Col>
              <Col sm={5} xm={12}>
                <select>
                  <option>CAN212</option>
                  <option>Residential Door</option>
                </select>
              </Col>
              <Col sm={2} xm={12}></Col>
            </Row>
          </div>{" "}
          <div className='btnBox' style={{ backgroundColor: "#fff" }}>
            <Row className='mt-2'>
              <Col sm={10} xm={12}>
                <div style={{ textAlign: "right" }}>
                  <Button  onClick={() => navigate("/configure")} style={{ backgroundColor: "#66332B" }}>
                    CONFIGURE
                  </Button>
                </div>
              </Col>
              <Col sm={2} xm={12}></Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}
