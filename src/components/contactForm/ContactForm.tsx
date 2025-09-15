
interface ContactFormProps {
    name: string,
    setName: (name: string) => void,
    phone: string,
    setPhone: (phone: string) => void,
    email: string,
    setEmail: (email: string) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}


export default function ContactForm({ name, setName, phone, setPhone, email, setEmail, handleSubmit }: ContactFormProps) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input required type="text" name="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                </label>
                <label>Phone:
                    <input required placeholder="xxx-xxx-xxxx" title="The phone number must have the format xxx-xxx-xxxx" type="tel" name="phone" value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                </label>
                <label> Email:
                    <input required placeholder="xxxx@xxx.xxx" type="email" name="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                </label>
                <button type="submit">Add Contact</button>
            </form>
        </>
    )
}