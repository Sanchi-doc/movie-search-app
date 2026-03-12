import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persister} from './redux/store.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
      <PersistGate persistor={persister} login={null}>
      <App />
      <ToastContainer autoClose={3000} theme="dark"/>
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
