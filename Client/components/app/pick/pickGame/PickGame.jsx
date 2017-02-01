import React from 'react'
import Game from './game/Game.jsx'

class PickGame extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            shownGames: [{id:"hi", index: 1},{id: "gi", index:2},{id: "bi", index: 3}]
        }

        this.onGameClick = this.onGameClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onLeftClick = this.onLeftClick.bind(this);
    }

    render(){
        return(
            <table>
            <tr>
                <td><button className="btn btn-warning glyphicon glyphicon-chevron-left" type="button"
                onClick={this.onLeftClick}></button></td>
                <div className="game-list">
                {
                    this.state.shownGames.map((game)=>{
                        return (
                           <Game onGameClick={this.onGameClick} game={game}/>
                        )
                    })
                }
                </div>
                <td><button className="btn btn-warning glyphicon glyphicon-chevron-right" type="button"
                onClick={this.onRightClick}></button></td>
            </tr>
            </table>
        );
    }

    onGameClick(gameIndex){
        if(gameIndex == 2){
            this.props.onGamePick(this.state.shownGames[1]);
        } else {
            for(var game in this.props.games){
                if(this.props.games[game].id == this.state.shownGames[gameIndex-1].id){
                    var newShownGames = [];
                    newShownGames[1] = {id:this.props.games[game].id,index:2};
                    newShownGames[0] = {id:this.props.games[((game - 1)<0)?(game - 1+ this.props.games.length):(game-1)].id, index:1};
                    newShownGames[2] = {id:this.props.games[(game*1 + 1)%this.props.games.length].id, index: 3};

                    this.setState({shownGames: newShownGames});
                }
            }
        }
    }

    onRightClick(){
        this.onGameClick(1);
    }

    onLeftClick(){
        this.onGameClick(3);
    }
}

export default PickGame;