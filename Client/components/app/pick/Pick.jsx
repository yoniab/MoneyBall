import React from 'react'
//import PickGame from './pickGame/PickGame.jsx'
import PickTeam from './pickTeam/PickTeam.jsx'
class Pick extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            page: "GAME"
        }
    }

    render(){
        return (
            <div>
                <div className="hit-the-floor">MONEYBALL</div>
                {
                    //(this.state.page == "GAME")?
                    //(<PickGame/>)//:
                    (<PickTeam/>)
                }
            </div>);
    }
}

export default Pick;    