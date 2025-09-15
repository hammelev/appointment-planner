import { Contact } from "../../types/types";
import ContactPicker from "../contactPicker/ContactPicker";
import { getTodayString } from "../../utils/date";

interface AppointmentFormProps {
    contacts: Array<Contact>,
    title: string,
    setTitle: (title: string) => void,
    contactName: string,
    setContactName: (contact: string) => void,
    date: string,
    setDate: (date: string) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function AppointmentForm({
    contacts,
    title,
    setTitle,
    contactName,
    setContactName,
    date,
    setDate,
    handleSubmit
}: AppointmentFormProps) {

    const handleOnChangeContact = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setContactName(e.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input required type="text" name="name" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                </label>
                <label>Date:
                    <input required type="datetime-local" name="date" value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} min={getTodayString()} />
                </label>
                <ContactPicker contacts={contacts} value={contactName} handleOnChange={handleOnChangeContact} name={"contact"} />

                <button type="submit">Add Appointment</button>
            </form>
        </>
    );
};