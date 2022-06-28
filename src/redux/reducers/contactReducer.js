const initialState = [
  {
    id: 0,
    name: 'John Smith',
    email: 'johnsmith@email.com',
    phone: 987654321,
  },
  {
    id: 2,
    name: 'Mary Ann',
    email: 'maryann@email.com',
    phone: 987654322,
  },
];

const contactReducer = ( state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      state = [ ...state, action.payload ]
      return state;
    case 'EDIT_CONTACT':
      const contactUpdated = state.map(contact => contact.id === action.payload.id
          ? action.payload
          : contact
      )
      state = contactUpdated;
      return state;
    default: return state;
  }
};

export default contactReducer;
