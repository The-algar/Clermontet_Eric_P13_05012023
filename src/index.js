import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './index.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Footer from './components/Footer'
import SignIn from './pages/Login';
import UserProfile from './pages/Profile';
import reportWebVitals from './reportWebVitals'
import store from './store.js';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={ <SignIn />} />
          <Route path="/profile" element={ <UserProfile/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
