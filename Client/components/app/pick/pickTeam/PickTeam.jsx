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
            <div className="coolText"><h1>𝐏𝐈𝐂𝐊 𝐘𝐎𝐔𝐑 𝐓𝐄𝐀𝐌</h1></div>
<div id="menu">
    <div className="fader">
        <a href="http://stackoverflow.com/questions/15732643/jquery-masonry-and-css3/">
            <img className ="blog img-square" src="img/teamOne.png" alt="" />
            </a>
        </div>
        
        <div className="fader">
            <a href="http://stackoverflow.com/questions/15732643/jquery-masonry-and-css3/">
                <img className ="blog img-square" src="img/teamTwo.png" alt="" />
                </a>
            </div>
                    
                </div> </div>
        );
    }
}

export default PickTeam;