// to do 리스트를 위한 

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  }
}

export const showAll = () => ({ type: SHOW_ALL });
export const showComplete = () =>({ type: SHOW_COMPLETE });
