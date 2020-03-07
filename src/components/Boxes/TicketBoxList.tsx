import React from 'react'
import TicketBox from './TicketBox'

interface ITicketBoxListProps {
    listTitle: string,
    ticketIdList: Array<string>,
    selectTicket: (ticketId: string) => void,
}
export default class TicketBoxList extends React.PureComponent<ITicketBoxListProps>{
    constructor(props : ITicketBoxListProps) {
        super(props)

    }

    render() {
        const ticketBoxes = this.props.ticketIdList.map(item => (
            <TicketBox key={item}
                       ticketId={item}
                       selectTicket={this.props.selectTicket} 
                       summary={"" /* Need to get summary from Redux? */} />
        ))

        return (
            <div className="ticket-box-list">
                <div>{this.props.listTitle}</div>
                {ticketBoxes}
            </div>
        )
    }
}