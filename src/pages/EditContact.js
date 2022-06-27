import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className='container-fluid'>
      <h1 className='text-center text-dark py-4 display-6'>Edit Contact { id }</h1>
      <div className='row'>
        <div className='col-md-6 p-5 mx-auto shadow'>
          <form>
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
                value='Update Student'
              />
              <Link
                to='/'
                className='btn btn-danger mx-3'
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
