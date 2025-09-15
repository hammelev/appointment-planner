import { createContext, useContext, useState } from "react";
import { Appointment } from "../types/types";

interface AppointmentsContextType {
    appointments: Array<Appointment>;
    addAppointment: (name: string, contactName: string, dateTime: Date) => void;
}

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

export const useAppointmentsContext = () => {
    const context = useContext(AppointmentsContext);
    if (!context) {
        throw new Error("useAppointmentsContext must be used within an AppointmentsProvider");
    }
    return context;
}

export const AppointmentsProvider = ({ children }: { children: React.ReactNode }) => {
    const [appointments, setAppointments] = useState<Array<Appointment>>([]);

    const addAppointment = (name: string, contactName: string, dateTime: Date) => {
        setAppointments(prevAppointments => [...prevAppointments, {name, contactName, dateTime}]);
    };

    return (
        <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
            {children}
        </AppointmentsContext.Provider>
    );
}