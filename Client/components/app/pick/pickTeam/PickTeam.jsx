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
            <div id="Teams">
            <h1>Pick your team!</h1>
<div id="menu">
    <div className="fader">
        <div className="text">
            <p>Yay!</p>
        </div>
        <a href="http://stackoverflow.com/questions/15732643/jquery-masonry-and-css3/">
            <img className ="blog img-square" src="img/teamOne.png" alt="" />
            </a>
        </div>
        
        <div className="fader">
            <div className="text">
                <p>Yay!</p>
            </div>
            <a href="http://stackoverflow.com/questions/15732643/jquery-masonry-and-css3/">
                <img className ="blog img-square" src="img/teamTwo.png" alt="" />
                </a>
            </div>
                    
                </div> </div>
        );
    }
}

export default PickTeam;