import React from 'react'

import Todo from './Todo'

const TodoList = ({ items}) => (
  <ul>
    {items.map(item =>
      <Todo
        key={item.id}
        {...item}
     
      />
    )}
  </ul>
)



export default TodoList
