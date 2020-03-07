import React from 'react'
import TicketBoxList from './TicketBoxList'
import { SearchBox, CreateButton } from '../Common/CommonComponents'

interface ITicketBoxViewProps {

}
export default class TicketBoxView extends React.PureComponent{
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