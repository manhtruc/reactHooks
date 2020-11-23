import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css'


const TodoList = (props) => {

    const { todos, onTodoClick } = props

    const handleClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li
                    className="todo-list-item"
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.name}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;

// TodoList.propTypes = {
//     todos: PropTypes.array,
//     onTodoClick: PropTypes.func,
// };

// TodoList.defaultProps = {
//     todos: [],
//     onTodoClick: null
// }

    // function TodoList(props) {
    //     const { todos, onTodoClick } = props

    //     const handleClick = (todo) => {
    //         if (onTodoClick) {
    //             onTodoClick(todo)
    //         }
    //     }

    //     return (
    //         <ul className="todo-list">
    //             {todos.map(todo => (
    //                 <li
    //                     className="todo-list-item"
    //                     key={todo.id}
    //                     onClick={() => handleClick(todo)}
    //                 >
    //                     {todo.name}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // export default TodoList;