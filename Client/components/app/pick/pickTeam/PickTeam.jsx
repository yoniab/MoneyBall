import React from 'react'
//import team from './team/team.jsx'

class PickTeam extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            team: [1,2,3]
        }

    }

    render(){
        return(
            <center>
            <h1>Pick your team!</h1>
            <div>
                <button></button>
                <button></button>
            </div>
            </center>
        );
    }
}

export default PickTeam;