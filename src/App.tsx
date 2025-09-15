import './App.css';
import { Routes, Route, Link, Navigate } from "react-router";
import ContactsPage from './containers/ContactsPage/ContactsPage';
import AppointmentsPage from './containers/AppointmentsPage/AppointmentsPage';
import { ContactsProvider } from './context/ContactsContext';
import { AppointmentsProvider } from './context/AppointmentsContext';

function App() {
  return (
    <>
      <nav>
        <Link to="/contacts">Contacts</Link>
        <Link to="/appointments">Appointments</Link>
      </nav>
      <main>
        <ContactsProvider>
          <AppointmentsProvider>
            <Routes>
              <Route path="/*" element={<Navigate to="/appointments" replace/>}/>
              <Route path="/contacts" element={<ContactsPage />}/>
              <Route path="/appointments" element={<AppointmentsPage />}/>
            </Routes>
          </AppointmentsProvider>
        </ContactsProvider>
      </main>
    </>
  );
}

export default App;