import {Contact} from "../../types/types";

interface ContactPickerProps {
  contacts: Array<Contact>,
  value: string,
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  name: string
}


export default function ContactPicker({contacts, value, handleOnChange, name}: ContactPickerProps) {
  return (
    <>
        <label>Pick a contact for the appointment:
            <select required name={name} onChange={handleOnChange} value={value}>
                <option key={"default"} value="">Select a contact</option>
                {contacts.map(({name}, index) => <option key={name+index} value={name}>{name}</option>)}
            </select>
        </label>
    </>
  );
};