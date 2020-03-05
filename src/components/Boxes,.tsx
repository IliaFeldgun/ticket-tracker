import React from 'react';

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