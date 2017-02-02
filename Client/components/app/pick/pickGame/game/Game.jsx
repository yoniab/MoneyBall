import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Game extends React.Component{

    constructor(props){
        super(props);

        this.onGameClick =this.onGameClick.bind(this);  
    }
    render(){
        return(
            <td className="game-container">
                <div className={(this.props.game.index==2)?"chosen-game":"faded-game"} 
                onClick={this.onGameClick}>
                <img className="img-circle game" src={this.props.game.teams[1].url}/> vs <img className="img-circle game" src={this.props.game.teams[0].url}/>
                </div>
            </td>
        );
    }

    onGameClick(){
        this.props.onGameClick(this.props.game.index);
    }
}

export default Game;