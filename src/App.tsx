import { Col, Container, Row } from 'react-bootstrap'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import ForgotPassword from './components/forgotPassword/ForgotPassword'
import Home from './components/home/Home'
import NewAccount from './components/newAccount/NewAccount'
import SignIn from './components/signIn/SignIn'
import SignUp from './components/signUp/SignUp'
const App: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route
              index
              element={<SignIn />}
            />
            <Route
              path="sign-up"
              element={<SignUp />}
            />
            <Route
              path="forgot-password"
              element={<ForgotPassword />}
            />
            <Route
              path="home"
              element={<Home />}
            />
            <Route
              path="newAccount"
              element={<NewAccount />}
            />
          </Routes>

          <ToastContainer
            autoClose={5000}
            position={toast.POSITION.BOTTOM_RIGHT}
            pauseOnFocusLoss={false}
            newestOnTop={true}
            limit={5}
          />
        </Col>
      </Row>
    </Container>
  )
}
export default App
