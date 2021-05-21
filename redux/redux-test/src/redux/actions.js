import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';
export const GET_USERS_START = 'GET_USERS_START'; //깃헙 api 호출을 시작하는 것을 의미
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; //깃헙 api 호출이 성공
export const GET_USERS_FAIL = 'GET_USERS_FAIL'; //깃헙 api 호출이 실패

export const addTodo = text => ({ type: ADD_TODO, text })
export const completeTodo = index => ({type: COMPLETE_TODO, index})
export const showAll = () => ({ type: SHOW_ALL });
export const showComplete = () =>({ type: SHOW_COMPLETE });
export const getUsersStart = () => ({ type: GET_USERS_START })
export const getUsersSuccess = (data) => ({ type: GET_USERS_SUCCESS, data })
export const getUsersFail = (error) => ({ type: GET_USERS_FAIL, error })

export const getUsersThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users')
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      console.error(error);
      dispatch(getUsersFail(error));
    }
  }
}