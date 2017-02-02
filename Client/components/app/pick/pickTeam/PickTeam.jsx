import React from 'react'
//import team from './team/team.jsx'

class PickTeam extends React.Component{

    constructor(props){
        super(props);

        this.onTeamClick = this.onTeamClick.bind(this);
    }

    render(){
        return(
            <div id="Teams">
            <div className="coolText"><h1>𝐏𝐈𝐂𝐊 𝐘𝐎𝐔𝐑 𝐓𝐄𝐀𝐌</h1></div>
<div id="menu">
    <div className="fader" onClick={this.onTeamClick}>
        <a>
            <img className ="blog img-square" src={this.props.game.teams[0].url} alt="" />
            </a>
        </div>
        
        <div className="fader" onClick={this.onTeamClick}>
            <a >
                <img className ="blog img-square" src={this.props.game.teams[1].url} alt="" />
                </a>
            </div>
                    
                </div> </div>
        );
    }

    onTeamClick(){
        this.props.onTeamClick({
            team: {name:"team", logo:""},
            players: [{name: "player", precentage: 20},
            {name: "player", precentage: 20},
            {name: "player", precentage: 20},
            {name: "player", precentage: 20},
            {name: "player", precentage: 20}]
        });
    }
}

export default PickTeam;