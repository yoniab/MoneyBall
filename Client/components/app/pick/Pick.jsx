
import React from 'react'
import PickGame from './pickGame/PickGame.jsx'
import PickTeam from './pickTeam/PickTeam.jsx'

var games = [{id:"hi", teams:[
    {team: "team1", url:"http://i.imgur.com/GLPCzXT.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "team2", url:"https://usatftw.files.wordpress.com/2016/05/minnesota_timberwolves-svg.png?w=1000&h=748", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index: 1},{id: "gi",teams:[
    {team: "team1",url:"http://i.imgur.com/GLPCzXT.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "team2",url:"https://usatftw.files.wordpress.com/2016/05/minnesota_timberwolves-svg.png?w=1000&h=748", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index:2},{id: "bi",teams:[
    {team: "team1",url:"http://i.imgur.com/GLPCzXT.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "team2",url:"http://i.imgur.com/GLPCzXT.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index: 3},{id:"fi",teams:[
    {team: "team1",url:"https://usatftw.files.wordpress.com/2016/05/minnesota_timberwolves-svg.png?w=1000&h=748", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "team2",url:"http://i.imgur.com/GLPCzXT.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index:4}, {id:"jo",teams:[
    {team: "team1",url:"http://i.imgur.com/GLPCzXT.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "team2",url:"https://usatftw.files.wordpress.com/2016/05/minnesota_timberwolves-svg.png?w=1000&h=748", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index:5}]
class Pick extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            page: "GAME"
        }

        this.onGamePick = this.onGamePick.bind(this);
        this.onTeamClick = this.onTeamClick.bind(this);
    }

    render(){
        return (
            <div>
                <div className="hit-the-floor">MONEYBALL</div>
                {
                    (this.state.page == "GAME")?
                    (<PickGame onGamePick={this.onGamePick} games={games}/>):
                    (<PickTeam onTeamClick={this.onTeamClick} game={this.state.currGame}/>)
                }
            </div>);
    }

    onGamePick(game){
        this.setState({page: "TEAM", currGame: game});
    }

    onTeamClick(team){
        this.props.onTeamPick(team);
    }
}
export default Pick;    