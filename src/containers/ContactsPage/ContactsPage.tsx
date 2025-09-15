import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { useContactsContext } from '../../context/ContactsContext';

import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export default function ContactsPage() {
    const { contacts } = useContactsContext();
    const {
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        handleSubmit,
    } = useContactForm();

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