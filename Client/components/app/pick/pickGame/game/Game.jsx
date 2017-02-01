import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Game extends React.Component{

    constructor(props){
        super(props);

        this.onGameClick =this.onGameClick.bind(this);  
    }
    render(){
        return(
            <td>
                <div className={(this.props.game.index==2)?"chosen-game":"faded-game"} 
                onClick={this.onGameClick}>
                    {this.props.game.id}
                <img className="img-circle game" src="http://i.imgur.com/GLPCzXT.png"/> vs <img className="img-circle game" src="https://usatftw.files.wordpress.com/2016/05/minnesota_timberwolves-svg.png?w=1000&h=748"/>
                </div>
            </td>
        );
    }

    onGameClick(){
        this.props.onGameClick(this.props.game.index);
    }
}

export default Game;