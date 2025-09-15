import { useState, useEffect } from 'react';
import { useContactsContext } from '../context/ContactsContext';

export const useContactForm = () => {
    const { contacts, addContact } = useContactsContext();
    const [name, setName] = useState('');
    const [isNameDuplicate, setIsNameDuplicate] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setIsNameDuplicate(contacts.some(contact => contact.name === name));
    }, [name, contacts]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isNameDuplicate) {
            addContact({ name, phone, email });
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    return {
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        handleSubmit,
    };
};