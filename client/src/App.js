import { useEffect, useState } from "react"
import './App.css';
import {fetchEvents} from './EventAPI'
import Events from "./Events";
import Registar from "./User/Registar"
import Login from "./User/Login";
<<<<<<< HEAD
import Main from "./App/Main";
=======
import CurrencyPage from "./Admin/CurrencyPage";
>>>>>>> 548a8c0cac0998204ce741f2fae037ae0570db07
import {Routes, Route, BrowserRouter} from "react-router-dom";
import useToken from './User/useToken'

function App() {

  const { token, setToken } = useToken();

  // if(!JSON.parse(sessionStorage.getItem('token'))) {
  //   return <Login setToken={setToken} />
  // }

return(

<BrowserRouter>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<Main/>}></Route>
        <Route path="/registar" element={<Registar/>}></Route>
        <Route path="/login" element={<Login setToken={setToken}/>}></Route>
        <Route path="/managecurrencies" element={<CurrencyPage/>}> </Route>
      </Routes>
    </BrowserRouter>

)
}

export default App;
