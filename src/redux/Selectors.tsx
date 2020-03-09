import { ITicketList } from './Types'
import { ITicket } from '../models/Ticket'

export const getTicketList = (state: ITicketList) => state.ticketList
export const getTicketFilter = (state: ITicketList) => state.filter

export const getFilteredTicketList = (state: ITicketList) => {
    const allTickets = getTicketList(state)
    const ticketFilter = getTicketFilter(state)

    return allTickets.filter(ticket => {
        return ticket.summary.indexOf(ticketFilter) > -1 || 
               ticket.description.indexOf(ticketFilter) > -1
    })
}

export const getTicketListBySeverity = (state: ITicketList, severity: ITicket["severity"]) => {
    const allTickets = getTicketList(state)

    return allTickets.filter(ticket => {
        return ticket.severity == severity
    })
}

export const getTicketListByStatus = (state: ITicketList, status: ITicket["status"]) => {
    const allTickets = getTicketList(state)

    return allTickets.filter(ticket => {
        return ticket.status == status
    })
}

