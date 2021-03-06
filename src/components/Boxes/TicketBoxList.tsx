import React from 'react'
import TicketBox from './TicketBox'
import { ITicket } from '../../models/Ticket'
import { connect } from 'react-redux'
import { getTicketList } from '../../redux/Selectors'
import { ITicketList } from '../../redux/Types'

interface ITicketBoxListProps {
    listTitle: string,
    ticketList: Array<ITicket>,
    selectTicket: (ticketId: string) => void,
}
export default class TicketBoxList extends React.PureComponent<ITicketBoxListProps>{
    constructor(props : ITicketBoxListProps) {
        super(props)

    }

    render() {
        const ticketBoxes = this.props.ticketList.map(item => (
            <TicketBox key={item.ticketId}
                       ticketId={item.ticketId}
                       summary={item.summary}
                       description={item.description}
                       status={item.status}
                       severity={item.severity}
                       creationDate={item.creationDate}
                       updateDate={item.updateDate}
                       selectTicket={this.props.selectTicket} 
                        />
        ))

        return (
            <span className="ticket-box-list">
                <span>{this.props.listTitle}</span>
                {ticketBoxes}
            </span>
        )
    }
}