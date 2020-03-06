import { ITicket } from "../models/Ticket"

export const CREATE_TICKET = "CREATE_TICKET"
export const UPDATE_TICKET = "UPDATE_TICKET"
export const DELETE_TICKET = "DELETE_TICKET"

interface ICreateTicketAction {
    type:   typeof CREATE_TICKET,
    ticket: ITicket
}

interface IUpdateTicketAction {
    type:   typeof UPDATE_TICKET,
    ticket: ITicket
}

interface IDeleteTicketAction {
    type:     typeof DELETE_TICKET,
    ticketId: ITicket["ticketId"]
}

export type TicketListActionTypes = ICreateTicketAction | 
                                    IUpdateTicketAction | 
                                    IDeleteTicketAction

export interface ITicketList {
    ticketList: Array<ITicket>
}