
let initialState = {
  sections: [
    { name: 'About' }, 
    { name: 'Projects' },
    { name: 'Skills' },
    { name: 'Education' },
    { name: 'Experience' },
    { name: 'Interests' },
  ],
  activeTab: 'About',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState, action ) => {

  let { type, payload } = action;

  switch(type) {
    case 'NAVIGATE':
      return {...state, activeTab: payload}
    default:
      return state;
  }
  
}

export const navigate = (name) => {
  return {
    type: 'NAVIGATE',
    payload: name,
  }
}