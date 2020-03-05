import React from 'react';

import {SearchBox, CreateButton} from './CommonComponents';

interface ITicketBoxProps {
    id: string,
    summary: string,
    selectTicket: (id: string) => void
}
class TicketBox extends React.PureComponent<ITicketBoxProps>{
    constructor(props : ITicketBoxProps)    {
        super(props)

        this.handleTicketSelection = this.handleTicketSelection.bind(this)
    }
    handleTicketSelection(event: React.MouseEvent<HTMLElement>, id : string)
    {
        this.props.selectTicket(id)
    }

    render() {
        return (
            <div className="ticket-box" 
                 onClick={(event) => 
                            this.handleTicketSelection(event, this.props.id)}>
                <label>ID: {this.props.id}</label>
                <label>Summary: {this.props.summary}</label>
            </div>
        )
    }
}

interface ITicketBoxListProps {
    listTitle: string,
    ticketIdList: Array<string>,
    selectTicket: (id: string) => void,
}
class TicketBoxList extends React.PureComponent<ITicketBoxListProps>{
    constructor(props : ITicketBoxListProps) {
        super(props)

    }

    render() {
        const ticketBoxes = this.props.ticketIdList.map(item => {
            <TicketBox id={item} 
                       selectTicket={this.props.selectTicket} 
                       summary={"" /* Need to get summary from Redux? */} />
        })

        return (
            <div className="ticket-box-list">
                <div>{this.props.listTitle}</div>
                {ticketBoxes}
            </div>
        )
    }
}

interface ITicketBoxViewProps {

}
class TicketBoxView extends React.PureComponent{
    constructor(props : ITicketBoxViewProps)
    {
        super(props)

        this.handleCreation = this.handleCreation.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.handleTicketSelection = this.handleTicketSelection.bind(this)
    }

    handleCreation(event: React.MouseEvent)
    {

    }

    handleFilter(filter: string)
    {
        
    }
    handleTicketSelection(ticketId: string)
    {

    }
    render() {
        return (
            <div className="ticket-box-view">
                <div>
                    <CreateButton handleCreation={this.handleCreation} />
                    <SearchBox handleFilter={this.handleFilter} />
                </div>
                <div>
                    <TicketBoxList listTitle="Open" 
                                   ticketIdList={[] /*TODO: add list */}
                                   selectTicket={this.handleTicketSelection} />
                                   
                    <TicketBoxList listTitle="In-Progress" 
                                   ticketIdList={[] /*TODO: add list */}
                                   selectTicket={this.handleTicketSelection} />
                                   
                    <TicketBoxList listTitle="Done" 
                                   ticketIdList={[] /*TODO: add list */}
                                   selectTicket={this.handleTicketSelection} />
                </div>
            </div>
        )
    }
}

