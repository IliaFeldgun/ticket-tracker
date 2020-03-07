import * as Actions from './Actions'
import { TicketListActionTypes, 
         ITicketList, 
         CREATE_TICKET, 
         UPDATE_TICKET, 
         DELETE_TICKET, 
         FILTER_BY } from './Types'
import { ITicket } from '../models/Ticket'

const initialState : ITicketList = {
    ticketList: [],
    filter: ""
}

function ticketTracker(state = initialState, 
                       action : TicketListActionTypes) : ITicketList
{
    switch (action.type) {
        case CREATE_TICKET:
            return { ...state, 
                ticketList: [ ...state.ticketList, { ...action.ticket}]}
        case UPDATE_TICKET:
            return { ...state, 
                ticketList: state.ticketList.map(ticket => {
                    if (ticket.ticketId === action.ticket.ticketId)
                        return { ...action.ticket} // TODO: maybe update certain properties
                    return ticket
                }) 
            }
        case DELETE_TICKET:
            return { ...state, 
                ticketList: state.ticketList.filter(ticket => (
                    ticket.ticketId === action.ticketId
                ))
            }
        case FILTER_BY: // TODO: maybe will be managed here??
            return { ...state, filter: action.filter }
        default:
            return state
    }
}

export type RootState = ReturnType<typeof ticketTracker>
export default ticketTracker