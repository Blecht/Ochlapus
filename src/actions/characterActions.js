export function setRace (race) {
  return {
      type: 'SET_RACE',
      payload: race,
  }
}
export function setProfession (profession) {
  return {
      type: 'SET_PROFESSION',
      payload: profession,
  }
}
export function setName (name) {
  return {
      type: 'SET_NAME',
      payload: name
    }
}