import { connect } from "react-redux";
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect( // 이자리에는 config가 들어감.
  mapStateToProps,
  mapDispatchToProps,
)(TodoList); // connnect 함수를 실행한 return 값이 함수이어서.. 이런 형태( HOC!!)


export default TodoListContainer;