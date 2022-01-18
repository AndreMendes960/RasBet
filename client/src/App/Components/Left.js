import "./Left.css"

function Left(props) {

    return (
      <div className="left">
        {props.isAdmin && <div className="leftWrapper">
            <h3 className="textLogo">Add Events</h3>
            <div className="leftCampWrapper">
                <input className="partidaInput" type="text" placeholder="Team1"></input>
                <input className="partidaInput" type="text" placeholder="Team2"></input>
                <input className="partidaInput" type="text" placeholder="Tipo" ></input>
            </div>
            <div className="leftCampWrapper">
                <input className="partidaInput" type="number" placeholder="Odd1" ></input>
                <input className="partidaInput" type="number" placeholder="OddDraw"></input>
                <input className="partidaInput" type="number" placeholder="Odd2" ></input>
            </div>       
            <div className="leftCampWrapper">
                
            </div>       
            <div className="leftCampWrapper"> 
                  <button className="partidaButton" >Submit</button>      
            </div>     
                    
        </div>}
    </div>  
        
    );

}

export default Left;