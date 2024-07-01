
import React from 'react'
import {

  Routes,
  Route, Link

} from "react-router-dom";
import Demo from './components/Demo';
import Learn from './components/Learn';
import FetchApi from "./components/FetchApi"

function App() {
  return (
    <div >
      <div class=" d-flex gap-4 mb-5">
        <Link to="/demo">DEMO</Link>
        <br />
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/demo" element={<Demo />} />

        <Route path="/" element={<Learn />} />


      </Routes>
      <FetchApi />
    </div>
  )
}
export default App




