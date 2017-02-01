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
    }

    render(){
        return (
            <div>
            {
                (this.state.outcome)?
                <Outcome outcome={this.state.outcome} onOutcomeBack={this.onOutcomeBack}/>:
                <Pick onTeamPicked={this.onTeamPicked} game={this.state.currGame}/>
            }
            </div>
        );
    }

    onTeamPicked(outcome){
        this.setState({outcome: outcome});
    }

    onOutcomeBack(){
        this.setState({outcome: null, currGame: this.state.outcome.game});
    }
}

export default App;