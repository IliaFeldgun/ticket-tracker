import React from 'react';
import {TicketStatus, TicketSeverity, ITicket} from '../models/Ticket'

interface ITicketDetailsProps extends ITicket {
    onChange: (event : React.FormEvent) => void,
}
export class TicketDetails extends React.PureComponent<ITicketDetailsProps> {
    constructor (props : ITicketDetailsProps) {
        super(props)
    }

    handleTicketChange(event: React.FormEvent)
    {
        this.props.onChange(event)
    }

    render() {
        return (
            <div className="ticket-details">
                <form className="ticket-details-form" onSubmit={this.handleTicketChange}>
                    <div>
                        Ticket ID: {this.props.ticketId}
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