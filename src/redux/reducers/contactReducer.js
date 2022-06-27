const initialState = [
  {
    id: 0,
    name: 'Tommy Shelby',
    email: 'tommy@peakyblinders.com',
    phone: 987654321,
  },
  {
    id: 2,
    name: 'Arthur Shelby',
    email: 'arthur@peakyblinders.com',
    phone: 987654322,
  },
];

const contactReducer = ( state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default contactReducer;
