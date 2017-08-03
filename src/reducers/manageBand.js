let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log(state.bands)
      id++
      const band = Object.assign({}, action.band, {id: id});
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      let bandDelete = state.bands.find((band) => band.id === action.id)
      let bandDeleteIndex = state.bands.indexOf(bandDelete)
      let update = [...state.bands.slice(0, bandDeleteIndex),
                    ...state.bands.slice(bandDeleteIndex + 1, state.bands.length)]
      return { bands: update}
    default:
      return state;
  }
};
