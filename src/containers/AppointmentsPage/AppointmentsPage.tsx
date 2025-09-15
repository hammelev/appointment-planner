import { useState } from "react";
import { Appointment, Contact } from "../../types/types";

import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

interface AppointmentsPageProps {
    appointments: Array<Appointment>,
    contacts: Array<Contact>,
    addAppointment: (name: string, contactName: string, dateTime: Date) => void
}

export default function AppointmentsPage({ appointments, contacts, addAppointment }: AppointmentsPageProps) {
    const [name, setName] = useState('');
    const [contactName, setContactName] = useState('');
    const [date, setDate] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, contactName, date);
    const isContactNameInList = contacts.find(contact => contact.name === contactName);
    const dateTimeForAppointment = new Date(date);

    if(isContactNameInList && dateTimeForAppointment){
        addAppointment(name, contactName, dateTimeForAppointment);
        setName('');
        setContactName('');
        setDate('');
    }
    
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={name} setTitle={setName} contactName={contactName} setContactName={setContactName} date={date} setDate={setDate} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileList={appointments} />
      </section>
    </div>
  );
};