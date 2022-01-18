import { useEffect, useState } from "react"
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import Nav from './Components/Nav';
import Left from './Components/Left';
import Middle from './Components/Middle';
import "./Main.css"
import {fetchEvents, checkAdmin} from '.././EventAPI';



function Main() {

    const [resources, setResources] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const[isAdmin, setAdmin] = useState(false)

    useEffect(()=>
    {
    fetchEvents().then(response => {
        setResources(response)
        checkAdmin(JSON.parse(sessionStorage.getItem('token'))).then(response=>{
            if(response == "false")
            {
                setAdmin(false)
            }
            else
            {
                setAdmin(true)
            }

            setLoading(false);
        })
        
    });   
    }, [])

    if (isLoading) {
        return <div className="homeContainer">Loading...</div>;
    }
    return (
       
        <div> 
            <Nav/>
            <div className='homeContainer'>
                <Left />
                <Middle isAdmin={isAdmin} items={resources}/>
            </div>
           
        </div>
        
    );

}

export default Main;