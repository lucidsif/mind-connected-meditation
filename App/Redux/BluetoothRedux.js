import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

// Refactor to the right action creators
const { Types, Creators } = createActions({
  startScan: null,
  endScan: null,
  setPeripherals: ['peripherals'],
  setAppState: ['appState']
})

console.log('BT', Types, Creators)

export const BluetoothTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  scanning: null,
  peripherals: new Map(),
  appState: ''
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const start = (state) =>
  state.merge({ scanning: true })

// successful avatar lookup
export const end = (state) =>
  state.merge({ scanning: false })

export const peripheral = (state, { peripherals }) =>
  state.merge({ peripherals })

// failed to get the avatar
export const app = (state, { appState }) =>
  state.merge({ appState })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START_SCAN]: start,
  [Types.END_SCAN]: end,
  [Types.SET_PERIPHERALS]: peripheral,
  [Types.SET_APP_STATE]: app
})
