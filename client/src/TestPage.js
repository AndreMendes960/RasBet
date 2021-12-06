import { useEffect, useState } from "react"
import './App.css';
import {fetchEvents} from './EventAPI'
function TestPage(props) {
  return (
      
    <div>
        {props.items.listEventsAll.map((item, index) => (
            <p>{item.event.team1}</p>
        ))}
    </div>
  );
}

export default TestPage;
