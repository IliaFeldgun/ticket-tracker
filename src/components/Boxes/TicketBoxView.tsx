import React from 'react'
import TicketBoxList from './TicketBoxList'
import { SearchBox, CreateButton } from '../Common/CommonComponents'
import { ITicketList } from '../../redux/Types'
import { ITicket, TicketStatus } from '../../models/Ticket'
import { connect } from 'react-redux'
import { getTicketListByStatus, getTicketById } from '../../redux/Selectors'
import TicketDetails from '../Common/TicketDetails'

interface ITicketBoxViewProps {
    ticketList: Array<ITicket>,
    ticketFilter: string
}
interface ITicketBoxViewState {
    currentTicketId: ITicket["ticketId"]
}
class TicketBoxView extends React.PureComponent<ITicketBoxViewProps,ITicketBoxViewState>{
    constructor(props : ITicketBoxViewProps)
    {
        super(props)

        this.handleCreation = this.handleCreation.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.handleTicketSelection = this.handleTicketSelection.bind(this)
        this.handleTicketDetails = this.handleTicketDetails.bind(this)
    }

    handleCreation(event: React.MouseEvent) {

    }

    handleFilter(filter: string) {
        
    }

    handleTicketDetails(event: React.FormEvent) {

    }
    handleTicketSelection(ticketId: string) {
        
    }
    
    render() {
        const selectedTicket = getTicketById({
                ticketList: this.props.ticketList, 
                filter: this.props.ticketFilter }, 
            this.state.currentTicketId)
        
        let ticketDetailsComponent = <React.Fragment />
        if (selectedTicket !== undefined)
            ticketDetailsComponent = 
            <TicketDetails onTicketChange={this.handleTicketDetails}
                           ticketId={selectedTicket.ticketId}
                           summary={selectedTicket.summary}
                           description={selectedTicket.description}
                           status={selectedTicket.status}
                           severity={selectedTicket.severity}
                           creationDate={selectedTicket.creationDate}
                           updateDate={selectedTicket.updateDate} />
        
        return (
            <div className="ticket-box-view">
                <div>
                    <CreateButton handleCreation={this.handleCreation} />
                    Search here: 
                    <SearchBox handleFilter={this.handleFilter} />
                </div>
                <span>
                    <TicketBoxList listTitle={TicketStatus.Open} 
                                   ticketList={getTicketListByStatus({ticketList: this.props.ticketList, filter: this.props.ticketFilter}, TicketStatus.Open) }
                                   selectTicket={this.handleTicketSelection} />
                                   
                    <TicketBoxList listTitle={TicketStatus.InProgress} 
                                   ticketList={getTicketListByStatus({ticketList: this.props.ticketList, filter: this.props.ticketFilter}, TicketStatus.InProgress) }
                                   selectTicket={this.handleTicketSelection} />
                                   
                    <TicketBoxList listTitle={TicketStatus.Done}
                                   ticketList={getTicketListByStatus({ticketList: this.props.ticketList, filter: this.props.ticketFilter}, TicketStatus.Done) }
                                   selectTicket={this.handleTicketSelection} />
                </span>
                <span>
                    { ticketDetailsComponent }
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state: ITicketList) => ({
    ticketList: state.ticketList,
    ticketFilter: state.filter
})

export default connect(mapStateToProps)(TicketBoxView)