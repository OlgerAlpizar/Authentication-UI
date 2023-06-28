import { AppLayout } from '../App'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ForgotPassword from '../components/forgotPassword/ForgotPassword'
import SignIn from '../components/signIn/SignIn'
import SignUp from '../components/signUp/SignUp'

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
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
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Router