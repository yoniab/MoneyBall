
import React from 'react'
import PickGame from './pickGame/PickGame.jsx'
import PickTeam from './pickTeam/PickTeam.jsx'

var games = [{id:"hi", teams:[
    {team: "NYK", url:"https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1263px-New_York_Knicks_logo.svg.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "BOS", url:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index: 1},{id: "gi",teams:[
    {team: "OKC",url:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1118px-Oklahoma_City_Thunder.svg.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "PHX",url:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1008px-Phoenix_Suns_logo.svg.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index:2},{id: "bi",teams:[
    {team: "DAL",url:"https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/771px-Dallas_Mavericks_logo.svg.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "NOH",url:"http://wp.production.patheos.com/blogs/friendlyatheist/files/2011/01/q8cgr5dizhfukxvgzk5zf3dt6.gif", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index: 3},{id:"fi",teams:[
    {team: "MIL",url:"http://www.drodd.com/images15/milwaukee-bucks11.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "MIN",url:"https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Minnesota_Timberwolves.svg/1280px-Minnesota_Timberwolves.svg.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]}
], index:4}, {id:"jo",teams:[
    {team: "CHI",url:"http://www.clarkstreetsports.com/site/images/chicago-bulls_f.png", players:[{name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10},
    {name: "hi", precentage:10}]},
    {team: "CLE",url:"http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png", players:[{name: "hi", precentage:10},
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
        this.props.onTeamPick(team.team);
    }
}
export default Pick;    