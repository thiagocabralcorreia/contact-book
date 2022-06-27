import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='row d-flex flex-column'>
        <Link to='/add' className='btn btn-outline-dark my-5 ml-auto '>
          Add Contact
        </Link>
        <div className='col-md-10 mx-auto my-4'>
          <table className='table table-hover'>
            <thead className='table-header bg-dark text-white'>
              <tr>
                <th scope='col'>Code</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone</th>
                <th scope='col'></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
