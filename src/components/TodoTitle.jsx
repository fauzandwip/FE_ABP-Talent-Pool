import EditButton from './icons/EditButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setDetailActivity } from '../features/todo/todoSlice';
import { updateActivityTitle } from '../features/todo/actions';

const TodoTitle = () => {
	const navigate = useNavigate();
	const inputTitleRef = useRef(null);
	const dispatch = useDispatch();
	const { detailActivity } = useSelector((state) => state.todo);

	const handleOnUpdateActivityTitle = async () => {
		try {
			await updateActivityTitle(detailActivity.id, detailActivity.title);
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnClickEdit = () => {
		inputTitleRef.current.focus();
	};

	return (
		<div className="flex gap-4 items-center">
			<button onClick={() => navigate('/')}>
				<img
					data-cy="todo-back-button"
					src="/icons/todo-back-button.svg"
					className="  w-8 h-8"
				/>
			</button>

			<form action="" className="w-auto bg-red-400">
				<input
					ref={inputTitleRef}
					onBlur={handleOnUpdateActivityTitle}
					onChange={(e) => {
						dispatch(setDetailActivity({ title: e.target.value }));
					}}
					type="text"
					data-cy="todo-title"
					value={detailActivity.title}
					className="text-4xl font-bold bg-white-secondary px-4 py-2 w-full outline-none border-b border-b-black"
				/>
			</form>
			<EditButton
				onClick={handleOnClickEdit}
				data-cy={'todo-title-edit-button"'}
				className="w-6 h-6 "
			/>
		</div>
	);
};

export default TodoTitle;
