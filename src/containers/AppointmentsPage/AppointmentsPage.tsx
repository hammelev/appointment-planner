import React from 'react';
import { useAppointmentForm } from '../../hooks/useAppointmentForm';
import { useAppointmentsContext } from '../../context/AppointmentsContext';
import { useContactsContext } from '../../context/ContactsContext';

import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export default function AppointmentsPage() {
    const { appointments } = useAppointmentsContext();
    const { contacts } = useContactsContext();
    const {
        title,
        setTitle,
        contactName,
        setContactName,
        date,
        setDate,
        handleSubmit
    } = useAppointmentForm();

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    contacts={contacts}
                    title={title}
                    setTitle={setTitle}
                    contactName={contactName}
                    setContactName={setContactName}
                    date={date}
                    setDate={setDate}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList tileList={appointments} />
            </section>
        </div>
    );
};