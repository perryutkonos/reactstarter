const initialState = {
  name: 'NoUser'
};

export const changeUser = name => {

  return {
    type: 'CHANGE',
    name
  }
}

export default function (state = initialState, action) {

  switch (action.type) {
    case 'CHANGE':
      return {...state, name: action.name}

    default:
      return state;
  }
}