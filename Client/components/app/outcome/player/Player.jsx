import React from 'react'

class Player extends React.Component{
    render(){
        return(
            <div className="player-name">
                <img className="shirt" src="./../../../images/img/Untitled.png"/>
                <label className="precentage-label">{this.props.player.precentage+"%"}</label>
                <label className="player-name nametag">{this.props.player.name}</label>
            </div>
        );
    }
}

export default Player;