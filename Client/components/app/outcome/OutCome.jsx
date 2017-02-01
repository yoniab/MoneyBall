import React from 'react'
import Player from './player/Player.jsx'

class Outcome extends React.Component{
    render(){
        return (
        <table>
            <Player player={this.props.outcome.players[0]} className="playerA"/>
            <Player player={this.props.outcome.players[1]} className="playerB"/>
            <Player player={this.props.outcome.players[2]} className="playerC"/>
            <Player player={this.props.outcome.players[3]} className="playerD"/>
            <Player player={this.props.outcome.players[4]} className="playerE"/>
        </table>);
    }
}

export default Outcome;