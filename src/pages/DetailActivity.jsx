import AddButton from '../components/AddButton';
import EmptyStateImage from '../components/EmptyStateImage';
import TodoList from '../components/TodoList';
import TodoTitle from '../components/TodoTitle';

const DetailActivity = () => {
	return (
		<div className=" min-h-screen pt-32">
			<div className="flex justify-between w-full mb-12">
				<TodoTitle />

				<div className="flex gap-5">
					<button
						id="sort-btn"
						className="p-4 aspect-square rounded-full border border-gray-secondary"
					>
						<object
							data="./icons/tabler_arrows-sort.svg"
							className=" pointer-events-none"
						/>
					</button>
					<AddButton />
				</div>
			</div>

			{/* <EmptyStateImage
				imageUrl={'./icons/todo-empty-state.svg'}
				dataCy={'todo-empty-state'}
			/> */}
			<TodoList />
		</div>
	);
};

export default DetailActivity;
