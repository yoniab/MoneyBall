import React from 'react'
import Player from './player/Player.jsx'

class Outcome extends React.Component{
    render(){
        return (
<div>

            <div>
                <div className="hit-the-floor">MONEYBALL</div>
                <div className="coolText"><h1>𝗧𝗛𝗜𝗦 𝗜𝗦 𝗬𝗢𝗨𝗥 𝗖𝗔𝗟𝗖𝗨𝗟𝗔𝗧𝗘𝗗 𝗕𝗘𝗦𝗧 𝗠𝗢𝗩𝗘. 𝗚𝗢𝗢𝗗 𝗟𝗨𝗖𝗞!
</h1></div>
<div className="row">
  <div className="col-xs-2 col-xs-offset-1"><Player player={this.props.outcome.players[0]} className="playerA"/></div>
  <div className="col-xs-2"><Player player={this.props.outcome.players[1]} className="playerB"/></div>
  <div className="col-xs-2"><Player player={this.props.outcome.players[2]} className="playerC"/></div>
  <div className="col-xs-2"><Player player={this.props.outcome.players[3]} className="playerD"/></div>
  <div className="col-xs-2"><Player player={this.props.outcome.players[4]} className="playerE"/></div>
</div>
            </div>
</div>);
    }
}

export default Outcome;