import { connect } from "react-redux";

function TodoList({todos}) {

  return (
  <ul>
    {todos.map((todo)=> {
      return <li>{todo.text}</li>
    })}
  </ul>
  )
}
export default TodoList;