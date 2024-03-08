import AddButton from '../components/AddButton';
import ModalFormItem from '../components/ModalFormItem';
import SortList from '../components/SortList';
import TodoList from '../components/TodoList';
import TodoTitle from '../components/TodoTitle';
import ModalDelete from '../components/ModalDelete';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	fetchDetailActivity,
	setCurrentTodo,
	setShowModalAdd,
	setShowModalDelete,
	setShowModalEdit,
} from '../features/todo/todoSlice';
import EmptyStateImage from '../components/EmptyStateImage';
import { useEffect } from 'react';
import {
	addTodoApi,
	deleteTodoApi,
	updateTodoApi,
} from '../features/todo/actions';

const DetailActivity = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const {
		detailActivity,
		currentTodo,
		showModalAdd,
		showModalEdit,
		showModalDelete,
	} = useSelector((state) => state.todo);

	const handleOnSave = async () => {
		try {
			await addTodoApi({
				title: currentTodo.title,
				priority: currentTodo.priority,
				activity_group_id: detailActivity.id,
			});

			dispatch(setCurrentTodo(null));
			dispatch(fetchDetailActivity(detailActivity.id));
			dispatch(setShowModalAdd());
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnUpdate = async () => {
		try {
			await updateTodoApi(currentTodo.id, currentTodo);

			dispatch(setCurrentTodo(null));
			dispatch(fetchDetailActivity(detailActivity.id));
			dispatch(setShowModalEdit());
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnDelete = async () => {
		try {
			console.log(currentTodo);
			await deleteTodoApi(currentTodo.id);
			dispatch(setShowModalDelete());
			dispatch(setCurrentTodo(null));
			dispatch(fetchDetailActivity(id));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		dispatch(fetchDetailActivity(id));
	}, []);

	return (
		<div
			className={`px-56 min-h-screen pt-32 relative ${
				showModalAdd || showModalEdit || showModalDelete
					? 'h-screen overflow-hidden'
					: ''
			}`}
		>
			<div className="flex justify-between w-full mb-12">
				<TodoTitle />

				<div className="flex gap-5">
					<SortList />
					<AddButton onClick={() => dispatch(setShowModalAdd())} />
				</div>
			</div>

			{detailActivity.todo_items.length ? (
				<TodoList />
			) : (
				<EmptyStateImage
					imageUrl={'/icons/todo-empty-state.svg'}
					dataCy={'todo-empty-state'}
				/>
			)}

			<div className={showModalAdd ? '' : 'hidden'}>
				<ModalFormItem
					onClickSave={handleOnSave}
					onClickClose={() => dispatch(setShowModalAdd())}
				/>
			</div>

			<div className={showModalEdit ? '' : 'hidden'}>
				<ModalFormItem
					onClickSave={handleOnUpdate}
					onClickClose={() => {
						dispatch(setCurrentTodo(null));
						dispatch(setShowModalEdit());
					}}
				/>
			</div>

			<div className={showModalDelete ? '' : 'hidden'}>
				<ModalDelete
					onClickCancel={() => dispatch(setShowModalDelete())}
					onClickDelete={handleOnDelete}
					question={'Apakah anda yakin menghapus List Item'}
					item={`“${currentTodo.title}”?`}
				/>
			</div>
		</div>
	);
};

export default DetailActivity;
