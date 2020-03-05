import React from 'react';

enum TicketStatus {
    Open = "open",
    InProgress = "inprogress",
    Done = "done"
}

enum TicketSeverity {
    Low = 1,
    Medium,
    High
}

interface ITicketProps {
    Summary : string,
    Description : string,
    Status: TicketStatus,
    Severity: TicketSeverity
}
export class Ticket extends React.PureComponent {
    constructor (props: ITicketProps) {
        super(props)
        this.id = ""
        this.creationDate = Date.now()
        this.updateDate = Date.now()
    }

    id : string
    creationDate : number
    updateDate : number
}
interface ITicketDetailsProps {
    summary: string,
    description: string,
    status: TicketStatus,
    severity: TicketSeverity,
    id: string,
    creationDate: number,
    updateDate: number,
    onChange: (event : React.FormEvent) => void,
}
export class TicketDetails extends React.PureComponent<ITicketDetailsProps> {
    constructor (props : ITicketDetailsProps) {
        super(props)
    }

    handleTicketChange(event: React.FormEvent)
    {

    }

    render() {
        return (
            <div className="ticket-details">
                <form className="ticket-details-form" onSubmit={this.handleTicketChange}>
                    <div>
                        Ticket ID: {this.props.id}
                    </div>
                    <div>
                        Summary: 
                        <input type="text" name="summary" defaultValue={this.props.summary} />
                    </div>
                    <div>
                        Description: 
                        <input type="text" name="description" defaultValue={this.props.description} />
                    </div>
                    <div>
                        <label>
                            Status:
                            <select defaultValue={this.props.status}>{/* TODO: test add a default value for this.props.status */}
                                <option value={TicketStatus.Done}>Done</option>
                                <option value={TicketStatus.InProgress}>In Progress</option>    
                                <option value={TicketStatus.Open}>Open</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Severity: 
                            <select defaultValue={this.props.severity}>
                                <option value={TicketSeverity.High}>High</option>
                                <option value={TicketSeverity.Medium}>Medium</option>
                                <option value={TicketSeverity.Low}>Low</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        Created: {new Date(this.props.creationDate).toLocaleString()}
                    </div>
                    <div>
                        Updated: {new Date(this.props.updateDate).toLocaleString()}
                    </div>
                    <input type="submit" value="Update ticket"/>
                    <input type="reset" value="Reset ticket value" />
                </form>
            </div>
        )
    }
}