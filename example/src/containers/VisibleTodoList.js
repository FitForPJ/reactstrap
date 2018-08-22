import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  items: state.todos
})



export default connect(
  mapStateToProps
)(TodoList)
