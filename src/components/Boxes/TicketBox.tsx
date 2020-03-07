import React from 'react'

interface ITicketBoxProps {
    ticketId: string,
    summary: string,
    selectTicket: (ticketId: string) => void
}
export default class TicketBox extends React.PureComponent<ITicketBoxProps>{
    constructor(props : ITicketBoxProps) {
        super(props)

        this.handleTicketSelection = this.handleTicketSelection.bind(this)
    }
    handleTicketSelection(event: React.MouseEvent<HTMLElement>, ticketId : string)
    {
        this.props.selectTicket(ticketId)
    }

    render() {
        return (
            <div className="ticket-box" 
                 onClick={(event) => 
                            this.handleTicketSelection(event, this.props.ticketId)}>
                <label>ID: {this.props.ticketId}</label>
                <label>Summary: {this.props.summary}</label>
            </div>
        )
    }
}
