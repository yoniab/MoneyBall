import React from 'react';
import { Router, Route} from 'react-router'
import Outcome from './outcome/Outcome.jsx'
import Pick from './pick/Pick.jsx'

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            outcome: null,
            currGame: null
        }

        this.onTeamPicked = this.onTeamPicked.bind(this);
        this.onOutcomeBack = this.onOutcomeBack.bind(this);
        this.calcOutCome = this.calcOutCome.bind(this);
    }

    render(){
        return (
            <div>
            {
                (this.state.outcome)?
                <Outcome outcome={this.state.outcome} onOutcomeBack={this.onOutcomeBack}/>:
                <Pick onTeamPick={this.onTeamPicked} game={this.state.currGame}/>
            }
            </div>
        );
    }

    onTeamPicked(team){
        this.calcOutCome(team);
    }

    onOutcomeBack(){
        this.setState({outcome: null, currGame: this.state.outcome.game});
    }

    calcOutCome(team){
        var info;
        $.get(
            "http://moneyballwebapi.azurewebsites.net/api/mb/"+team,
            function(data) {
                var data = JSON.parse(data);
                var team = [];
                team[0] = data.homeplayer1name;
                team[1] = data.homeplayer2name;
                team[2] = data.homeplayer3name;
                team[3] = data.homeplayer4name;
                team[4] = data.homeplayer5name;
                info = {players:team};
                this.setState({outcome: info});
            }.bind(this)
        );

        
        
    }
}

export default App;