/*eslint-disable*/
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/reset.css'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contect from './pages/Contect'
import styled from 'styled-components'

function App() {
  return (
    <AppWrapper>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
      </Router>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  background-color: #f0f1f3;
  height: 100vh;

  // & > div {
  //   margin: 0 auto;
  //   width: 80%;
  //   height: 80vh;
  //   // border: 1px solid white;
  //   // border: 30px solid black;
  //   // border-radius: 20px;
  //   box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  //   background-color: #ffd12f;
  // }
`
