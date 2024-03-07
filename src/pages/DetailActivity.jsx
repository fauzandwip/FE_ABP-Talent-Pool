import AddButton from '../components/AddButton';
import ModalAddItem from '../components/ModalAddItem';
import SortList from '../components/SortList';
import TodoList from '../components/TodoList';
import TodoTitle from '../components/TodoTitle';
import ModalDelete from '../components/ModalDelete';
import { useSelector, useDispatch } from 'react-redux';
import {
	setShowModalAdd,
	setShowModalDelete,
} from '../features/todo/todoSlice';

const DetailActivity = () => {
	const dispatch = useDispatch();
	const { showModalAdd, showModalDelete } = useSelector((state) => state.todo);

	return (
		<div
			className={`px-56 min-h-screen pt-32 relative ${
				showModalAdd || showModalDelete ? 'h-screen overflow-hidden' : ''
			}`}
		>
			<div className="flex justify-between w-full mb-12">
				<TodoTitle />

				<div className="flex gap-5">
					<SortList />
					<AddButton onClick={() => dispatch(setShowModalAdd())} />
				</div>
			</div>

			{/* <EmptyStateImage
				imageUrl={'./icons/todo-empty-state.svg'}
				dataCy={'todo-empty-state'}
			/> */}
			<TodoList />

			<div className={showModalAdd ? '' : 'hidden'}>
				<ModalAddItem onClickClose={() => dispatch(setShowModalAdd())} />
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
