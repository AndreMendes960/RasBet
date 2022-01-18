import { useEffect, useState } from "react";
import { sendLogin } from "../EventAPI";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Nav from "./Components/Nav";
import Left from "./Components/Left";
import Middle from "./Components/Middle";
import "./Main.css";
import { fetchEvents, checkAdmin } from ".././EventAPI";

function Main() {
  const [resources, setResources] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isAdmin, setAdmin] = useState(false);
  const [isLogged, setLogged] = useState(true);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("token")) == null)
    {
        console.log("Not logged in")
        setLogged(false)
    }
    fetchEvents().then((response) => {
      setResources(response);
      if (isLogged) {
          checkAdmin(JSON.parse(sessionStorage.getItem("token"))).then(
        (response) => {
            console.log(response)
          if (response == "false") {
            setAdmin(false);
          } else {
            setAdmin(true);
          }

          setLoading(false);
        }
      );
    } else {
        setAdmin(false);
        setLoading(false);
    }

    setLoading(false);
      
    });
  }, []);


  if (isLoading) {
    return <div className="homeContainer">Loading...</div>;
  }
  return (
    <div>
      <Nav isAdmin={isAdmin} />
      <div className="homeContainer">
        {isAdmin && <Left isAdmin={isAdmin}></Left>}
        <Middle isAdmin={isAdmin} items={resources} />
      </div>
    </div>
  );
}

export default Main;
