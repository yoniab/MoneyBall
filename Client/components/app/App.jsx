import React from 'react';
import { Router, Route} from 'react-router'
import OutCome from './outcome/Outcome.jsx'
import Pick from './pick/Pick.jsx'

class App extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Router>
                <Route path="Outcome" component={Outcome}/>
                <Route path="Pick" component={Pick}/>
            </Router>
        );
    }
}

export default App;