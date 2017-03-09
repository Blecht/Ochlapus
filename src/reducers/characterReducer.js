export default function reducer(state={
  characterData: {
    name: '',
    race: '',
    profession: '',
}}, action) {

  switch (action.type) {
    case 'SET_RACE': {
      return {...state, race: action.race}
    }
    case 'SET_PROFESSION': {
      return {...state, profession: action.profession}
    }
    case 'SET_NAME': {
      return {...state, name: action.name,}
    }
    default: {
      return state;
    }
  }
}