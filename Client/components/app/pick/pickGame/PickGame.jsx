import React from 'react'
//import Game from './game/Game.jsx'

class PickGame extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            game: [1,2,3]
        }

    }

    render(){
        return(
            <div>
                <button></button>
                {
                    this.state.game.map((game)=>{
                        return (
  //                          <Game game={game}/>
  <div></div>
                        )
                    })
                }
                <button></button>
            </div>
        );
    }
}

export default PickGame;