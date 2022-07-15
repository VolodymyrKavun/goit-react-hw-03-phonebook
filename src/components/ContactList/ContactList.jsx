import { Item, List, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteBtn }) => {
  return (
    <div>
      <List>
        {contacts.map(el => (
          <Item key={el.id}>
            {el.name}: {el.number}
            <Button onClick={() => deleteBtn(el.id)}>Delete</Button>
          </Item>
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
