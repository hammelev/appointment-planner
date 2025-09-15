import { createContext, useContext, useState } from "react";
import { Contact } from "../types/types";

interface ContactsContextType {
    contacts: Array<Contact>;
    addContact: (contact: Contact) => void;
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export const useContactsContext = () => {
    const context = useContext(ContactsContext);
    if (!context) {
        throw new Error("useContactsContext must be used within a ContactsProvider");
    }
    return context;
}

export const ContactsProvider = ({ children }: { children: React.ReactNode }) => {
    const [contacts, setContacts] = useState<Array<Contact>>([]);

    const addContact = (contact: Contact) => {
        setContacts(prevContacts => [...prevContacts, contact]);
    };

    return (
        <ContactsContext.Provider value={{ contacts, addContact }}>
            {children}
        </ContactsContext.Provider>
    );
}