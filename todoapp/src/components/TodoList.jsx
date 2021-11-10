import React from 'react';
import Todo from './Todo';

//aldığım todoları listeliyorum 
const TodoList = ({ todos }) => {
    return (
        <div className="todo-list">
            {todos && todos.map((todo)=> <Todo key={todo.id} todo={todo} />)}
             {/*todos ile todosun içindeki her bir veriyi components in altındaki Todo ya gönder key, id, ve todo nun kendisini gönder. */}
            
        </div> 
    );
};

export default TodoList;
