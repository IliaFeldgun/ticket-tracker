export enum TicketStatus {
    Open = "open",
    InProgress = "inprogress",
    Done = "done"
}

export enum TicketSeverity {
    Low = 1,
    Medium,
    High
}

export interface ITicket {
    ticketId: string,
    summary: string,
    description: string,
    status: TicketStatus,
    severity: TicketSeverity,
    creationDate: number,
    updateDate: number,
}