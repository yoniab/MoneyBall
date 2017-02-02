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
    <div className="fader" onClick={this.onTeamClick.bind(this,this.props.game.teams[0].team)}>
        <a>
            <img className ="blog img-square" src={this.props.game.teams[0].url} alt="" />
            </a>
        </div>
        
        <div className="fader" onClick={this.onTeamClick.bind(this,this.props.game.teams[1].team)}>
            <a >
                <img className ="blog img-square" src={this.props.game.teams[1].url} alt="" />
                </a>
            </div>
                    
                </div> </div>
        );
    }

    onTeamClick(team){
        this.props.onTeamClick({
            team: team
        });
    }
}

export default PickTeam;