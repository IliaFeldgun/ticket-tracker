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
            return Object.assign({}, state, { 
                ticketList: [...state.ticketList, action.ticket], filter: state.filter})
        case UPDATE_TICKET:
            return Object.assign({}, state, { 
                ticketList: [], filter: state.filter})
        case DELETE_TICKET:
            return Object.assign({}, state, { 
                ticketList: state.ticketList.filter(ticket => {
                                 ticket.ticketId === action.ticketId})
                })
        case FILTER_BY: // TODO: maybe will be managed here??
            return Object.assign({}, state, {filter: action.filter})
        default:
            return state
    }
}

