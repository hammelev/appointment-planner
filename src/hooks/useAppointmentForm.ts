import { useState } from 'react';
import { useAppointmentsContext } from '../context/AppointmentsContext';
import { useContactsContext } from '../context/ContactsContext';

export const useAppointmentForm = () => {
    const { addAppointment } = useAppointmentsContext();
    const { contacts } = useContactsContext();
    const [title, setTitle] = useState('');
    const [contactName, setContactName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isContactNameInList = contacts.find(contact => contact.name === contactName);
        const dateTimeForAppointment = new Date(date);

        if(isContactNameInList && dateTimeForAppointment){
            addAppointment(title, contactName, dateTimeForAppointment);
            setTitle('');
            setContactName('');
            setDate('');
        }
    };

    return {
        title,
        setTitle,
        contactName,
        setContactName,
        date,
        setDate,
        handleSubmit
    };
};