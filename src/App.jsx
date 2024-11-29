
import HomePage from "./Pages/HomePage"
import ServicePage from "./Pages/ServicePage"
import WebDev from "./Pages/Webdev"
import AboutPage from "./Pages/AboutPage"

import { BrowserRouter as Router , Routes , Route } from "react-router"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />  
        <Route path="/services/web-dev" element={<WebDev />} />  
        <Route path="/about" element={<AboutPage />} />  

      </Routes>
    </Router>
  


    </>
  )
}

export default App
