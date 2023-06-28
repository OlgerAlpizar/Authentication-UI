import './bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from 'react-auth-kit'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <BrowserRouter>
        <App />

        <ToastContainer
          autoClose={5000}
          position={toast.POSITION.BOTTOM_RIGHT}
          pauseOnFocusLoss={false}
          newestOnTop={true}
          limit={5}
        />

      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
