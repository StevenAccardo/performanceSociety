//Landing Page

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LandingCarousel from './Carousel';

import makeChange from '../../../../assets/images/make_change.png';

export default () => {
  return (
    <div className="landing-page">
      <Container>
        <Row>
          <Col>
            <LandingCarousel />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={makeChange} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
