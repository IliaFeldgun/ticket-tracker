import { ITicket } from '../models/Ticket';

import { CREATE_TICKET, 
         DELETE_TICKET, 
         UPDATE_TICKET, 
         TicketListActionTypes } from './Types';

export function createTicket(ticket : ITicket) : TicketListActionTypes {
    return { type: CREATE_TICKET, ticket }
}

export function updateTicket(ticket: ITicket) : TicketListActionTypes {
    return { type: UPDATE_TICKET, ticket }
}

export function deleteTicket(ticketId : ITicket["ticketId"]) : TicketListActionTypes {
    return { type: DELETE_TICKET, ticketId }
}