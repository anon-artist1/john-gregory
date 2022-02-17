import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from "./routes/Home"
import Portfolio from "./routes/Portfolio"
import Contact from "./routes/Contact"

function App() {

  useEffect(() => {
    document.title = "John Gregory"
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
