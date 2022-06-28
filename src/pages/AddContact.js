import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmailExists = contacts.find(contact => contact.email === email && email);
    const checkPhoneExists = contacts.find(contact => contact.phone === parseInt(phone));

    if (!name || !email || !phone) {
      return toast.warning('Please fill in all fields.');
    } else if (checkEmailExists) {
      return toast.error('This email already exists.');
    } else if (checkPhoneExists) {
      return toast.error('This phone number already exists.');
    };

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: data });
    toast.success('Contact added successfully.');
    history('/');
  }

  return (
    <div className='container-fluid'>
      <h1 className='text-center text-dark py-4 display-6'>Add Contact</h1>
      <div className='row'>
        <div className='col-md-6 p-5 mx-auto shadow'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                className='form-control my-3'
                type='text'
                placeholder='Full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                className='form-control my-3'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                className='form-control my-3'
                type='number'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                className='btn btn-block btn-dark'
                type='submit'
                value='Add Student'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
