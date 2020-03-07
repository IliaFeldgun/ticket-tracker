import React from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";

import TicketBoxView from './components/Boxes/TicketBoxView'
import { TicketTableView } from './components/Table/Table'

import { boxesRoute, tableRoute } from './config'


class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={boxesRoute} component={TicketBoxView} />
                <Route exact path={tableRoute} component={TicketTableView} />
            </Router>
        )
    }
}

export default App;