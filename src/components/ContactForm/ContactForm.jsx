import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, InputBottom, Button } from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        htmlFor={nameInputId}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <InputBottom
        type="tel"
        name="number"
        value={number}
        htmlFor={numberInputId}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//--------class---------

/* class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          htmlFor={this.nameInputId}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.numberInputId}>Number</Label>
        <InputBottom
          type="tel"
          name="number"
          value={number}
          htmlFor={this.numberInputId}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

 */
