import { Col, Container, Row } from 'react-bootstrap'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Router from './routing/Router'

const App: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Router/>
        </Col>
      </Row>
    </Container>
  )
}

export const AppLayout = () => {
  return <Outlet/>
}

export default App
