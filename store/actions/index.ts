import * as types from '../../types'

// SET TOKEN
export const setToken = () => ({ type: types.SET_TOKEN })
// RESET TOKEN
export const resetToken = () => ({ type: types.RESET_TOKEN })

// SET USER
export const setCurrentUser = () => ({ type: types.SET_CURRENT_USER })

// SET USER PLAYLISTS
export const setUserPlaylists = () => ({ type: types.SET_USER_PLAYLISTS })