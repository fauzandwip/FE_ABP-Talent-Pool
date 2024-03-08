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
	setShowModalAdd,
	setShowModalDelete,
	setShowModalEdit,
} from '../features/todo/todoSlice';
import EmptyStateImage from '../components/EmptyStateImage';
import { useEffect } from 'react';

const DetailActivity = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { detailActivity, showModalAdd, showModalEdit, showModalDelete } =
		useSelector((state) => state.todo);
	// const [currentActivity, setCurrentActivity] = useState(detailActivity);

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
				<ModalFormItem onClickClose={() => dispatch(setShowModalAdd())} />
			</div>

			<div className={showModalEdit ? '' : 'hidden'}>
				<ModalFormItem onClickClose={() => dispatch(setShowModalEdit())} />
			</div>

			<div className={showModalDelete ? '' : 'hidden'}>
				<ModalDelete
					onClickCancel={() => dispatch(setShowModalDelete())}
					question={'Apakah anda yakin menghapus List Item'}
					item={'Telur Ayam”?'}
				/>
			</div>
		</div>
	);
};

export default DetailActivity;
