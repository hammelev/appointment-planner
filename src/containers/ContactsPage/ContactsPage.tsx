import React, { useState, useEffect } from 'react';
import { Contact } from '../../types/types';

import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

interface ContactsPageProps {
    contacts: Array<Contact>,
    addContact: (contact: Contact) => void
};

export default function ContactsPage({ contacts, addContact }: ContactsPageProps) {
    const [name, setName] = useState('');
    const [isNameDuplicate, setIsNameDuplicate] = useState(false);

    useEffect(() => {
        setIsNameDuplicate(contacts.some(contact => contact.name === name));
    }, [name, contacts])

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isNameDuplicate) {
            addContact({ name, phone, email });
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList tileList={contacts} />
            </section>
        </div>
    );
}