import { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
	const [todos, setTodos] = useState(Array(15).fill(0));

	return (
		<div className="w-full flex flex-col gap-2.5 pb-10">
			{todos.length &&
				todos.map((_, index) => {
					return <Todo key={index} />;
				})}
		</div>
	);
};

export default TodoList;
