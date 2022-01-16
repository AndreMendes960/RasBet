import "./Middle.css"
import Bet from './Bet';
function Middle(props) {

    return (
      <div className="middle">
       
        <ul>
        {props.items.listEventsAll.map((item, index) => (
            <Bet bet={item.event}></Bet>
        ))}
        </ul>
    </div>  
        
    );

}

export default Middle;