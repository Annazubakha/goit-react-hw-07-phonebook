import { ContactListElem } from 'components/ContactListElem/ContactListElem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    console.log(items);
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map(contact => (
          <ContactListElem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
