import { useEffect, useState } from "react"
import './App.css';
import {fetchEvents} from './EventAPI'
import Events from "./Events";
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
return(

<BrowserRouter>
      <Routes>
        <Route path="/events" element={<Events />} />
        {/* <Route path="users" element={<Users />}>
          <Route path="/" element={<UsersIndex />} />
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>

)
}




export default App;
