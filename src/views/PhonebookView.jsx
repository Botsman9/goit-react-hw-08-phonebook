import { getVisibleContacts } from '../redux/phonebook-selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import Container from '../components/Container/Container';

const styles = {
  section: {
    color: 'white',
    border: ' 2px solid white',
    padding: 10,
    borderRadius: 10,
    background: '#5d8aa8',
  },
};

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <div style={styles.section}>
        <h2>Contacts:</h2>
        <p>Общее кол-во: {totalContactsCount}</p>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
