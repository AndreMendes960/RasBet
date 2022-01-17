import { useEffect, useState } from "react"
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import Nav from './Components/Nav';
import Left from './Components/Left';
import Middle from './Components/Middle';
import "./Main.css"
import {fetchEvents} from '.././EventAPI';



function Main() {

    const [resources, setResources] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>
    {
    fetchEvents().then(response => {
        setResources(response)
        setLoading(false);
    });   
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(JSON.parse(sessionStorage.getItem('token')));
    return (
       
        <div> 
            <Nav/>
            <div className='homeContainer'>
                <Left />
                <Middle items={resources}/>
            </div>
           
        </div>
        
    );

}

export default Main;