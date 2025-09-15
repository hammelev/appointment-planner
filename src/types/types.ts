
export interface Contact {
    name: string,
    phone: string,
    email: string
}

export interface Appointment {
    name: string,
    contactName: string,
    dateTime: Date,
}