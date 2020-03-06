import * as Actions from './Actions'
import { TicketListActionTypes, ITicketList } from './Types'

const initialState : ITicketList = {
    ticketList: []
}

function ticketTracker(state = initialState, 
                       action : TicketListActionTypes) : ITicketList
{
    
    switch (action.type) {
        case CREATE_TICKET:
            return {}
    }

    return state;
}

