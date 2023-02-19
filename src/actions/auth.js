import * as api from '../api'
import { AUTH } from '../constants/actionTypes'


export const signin  = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
  } catch (error) {
    
  }
}