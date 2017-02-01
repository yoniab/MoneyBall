import React from 'react'

class Player extends React.Component{
    render(){
        return(
            <td>
                <img className="shirt" src="./../../../images/basketballShirt.gif"/>
                <label className="precentage-label">{this.props.player.precentage+"%"}</label>
                <label className="player-name">{this.props.player.name}</label>
            </td>
        );
    }
}

export default Player;