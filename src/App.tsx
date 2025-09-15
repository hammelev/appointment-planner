import {useState} from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from "react-router";
import ContactsPage from './containers/ContactsPage/ContactsPage';
import AppointmentsPage from './containers/AppointmentsPage/AppointmentsPage';
import { Contact, Appointment } from './types/types';

function App() {
  const [contacts, setContacts] = useState<Array<Contact>>([]);
  const [appointments, setAppointments] = useState<Array<Appointment>>([]);

  const addContact = (contact: Contact) => {
    setContacts(prevContacts => [...prevContacts, contact]);
  }

  const addAppointment = (name: string, contactName: string, dateTime: Date) => {
    setAppointments(prevAppointments => [...prevAppointments, {name, contactName, dateTime}]);
  }

  return (
    <>
      <nav>
        <Link to="/contacts">Contacts</Link>
        <Link to="/appointments">Appointments</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/*" element={<Navigate to="/appointments" replace/>}/>
          <Route path="/contacts" element={<ContactsPage contacts={contacts} addContact={addContact} />}/>
          <Route path="/appointments" element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
