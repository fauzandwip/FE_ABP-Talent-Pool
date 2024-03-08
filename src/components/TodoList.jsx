import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const { detailActivity } = useSelector((state) => state.todo);

	return (
		<div className="w-full flex flex-col gap-2.5 pb-10">
			{detailActivity.todo_items.map((data, index) => {
				return <Todo key={index} data={data} />;
			})}
		</div>
	);
};

export default TodoList;
