// to do 리스트를 위한 

export const ADD_TODO = "ADD_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}