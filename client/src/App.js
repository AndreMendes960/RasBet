import { useEffect, useState } from "react"
import './App.css';
import {fetchEvents} from './EventAPI'
import Events from "./Events";
import Registar from "./User/Registar"
import Login from "./User/Login";
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
return(

<BrowserRouter>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/registar" element={<Registar/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>

)
}




export default App;
