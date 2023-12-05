import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './Navigation'
import React from 'react'

export default function Layout(props) {
  return (
    <>
      <img src="./compass.png" alt="React Logo" width="100" height="100" />
      <Navigation></Navigation>
      <br />
      <Container>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </>
  )
}
