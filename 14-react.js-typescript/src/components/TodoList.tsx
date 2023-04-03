import React from "react";

interface TodoListProps{
    items:{id:string,text:string}[]
}

const TodoList: React.FC<TodoListProps> = (props) => {

        return <ul>
        {
            props.items.map(todo => <ul>
                <li key={todo.id}>
                    {todo.text}
                </li>
            </ul>)
        }
    </ul>;
};

export default TodoList