const EmptyStateImage = () => {
	return (
		<div className="flex justify-center">
			<object
				data-cy="activity-empty-state"
				data="/icons/activity-empty-state.svg"
			/>
		</div>
	);
};

export default EmptyStateImage;
