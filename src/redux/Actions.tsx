import { ITicket } from '../models/Ticket';

import { CREATE_TICKET, 
         DELETE_TICKET, 
         UPDATE_TICKET,
         FILTER_BY,
         TicketListActionTypes } from './Types';

export function createTicket(ticket: ITicket): TicketListActionTypes {
    return { type: CREATE_TICKET, ticket }
}

export function updateTicket(ticket: ITicket): TicketListActionTypes {
    return { type: UPDATE_TICKET, ticket }
}

export function deleteTicket(ticketId: ITicket["ticketId"]): TicketListActionTypes {
    return { type: DELETE_TICKET, ticketId }
}

export function filterBy(filter: string): TicketListActionTypes {
    return { type: FILTER_BY, filter}
}