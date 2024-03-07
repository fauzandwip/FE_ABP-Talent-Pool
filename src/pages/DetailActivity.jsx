import { useState } from 'react';
import AddButton from '../components/AddButton';
import EmptyStateImage from '../components/EmptyStateImage';
import ModalAddItem from '../components/ModalAddItem';
import SortList from '../components/SortList';
import TodoList from '../components/TodoList';
import TodoTitle from '../components/TodoTitle';

const DetailActivity = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div
			className={`px-56 min-h-screen pt-32 relative ${
				showModal ? 'h-screen overflow-hidden' : ''
			}`}
		>
			<div className="flex justify-between w-full mb-12">
				<TodoTitle />

				<div className="flex gap-5">
					<SortList />
					<AddButton onClick={() => setShowModal(true)} />
				</div>
			</div>
			{/* <EmptyStateImage
				imageUrl={'./icons/todo-empty-state.svg'}
				dataCy={'todo-empty-state'}
			/> */}
			<TodoList />
			{showModal && <ModalAddItem onClickClose={() => setShowModal(false)} />}
		</div>
	);
};

export default DetailActivity;
