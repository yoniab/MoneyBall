import React from 'react'

class Player extends React.Component{
    render(){
        return(
            <div className="player-name">
                <img className="shirt" src="./../../../images/img/Untitled.png"/>
                <label className="precentage-label"></label>
                <label className="player-name nametag">{this.props.player}</label>
            </div>
        );
    }
}

export default Player;