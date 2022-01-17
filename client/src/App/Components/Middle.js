import "./Middle.css"
import Bet from './Bet';
function Middle(props) {
    
    return (
      <div className="middle">
          
        <ul>
            {props.items.map((item, index) => (
                <Bet key={index} bet={item}></Bet>
            ))}
        </ul>
    </div>  
        
    );

}

export default Middle;