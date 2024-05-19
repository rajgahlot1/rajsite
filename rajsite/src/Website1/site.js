import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './Sites.css'

import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import Header from './Header.jsx'
import Home from './Home.jsx'
import About from "./About.jsx"
import Service from "./Service.jsx"
import Contact from './Contact.jsx'
const App=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
<Route path=" " element={<Home/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/about"  element={<About/>}/>
<Route path="/service" element={<Service/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App
