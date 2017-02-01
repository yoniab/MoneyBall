import React from 'react';
import PickGame from './pickGame/PickGame'
import PickTeam from './pickTeam/PickTeam'
class Pick extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            page: "GAME"
        }
    }

    render(){
        return (
            <div>
                <img src="image"/>
                {
                    (this.state.page == "GAME")?
                    (<PickGame/>):
                    (<PickTeam/>)
                }
            </div>);
    }
}

export default Pick;    