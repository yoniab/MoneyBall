import React from 'react'
import PickGame from './pickGame/PickGame.jsx'
//import PickTeam from './pickTeam/PickTeam.jsx'

var games = [{id:"hi", index: 1},{id: "gi", index:2},{id: "bi", index: 3},{id:"fi", index:4}, {id:"jo", index:5}]
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
                <img src="image"/>
                {
                    //(this.state.page == "GAME")?
                    (<PickGame onGamePick={this.onGamePick} games={games}/>)//:
                    //(<PickTeam/>)
                }
            </div>);
    }

    onGamePick(){
        this.setState({page: "TEAM"})
    }
}

export default Pick;    