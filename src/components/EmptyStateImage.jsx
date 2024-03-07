import PropTypes from 'prop-types';

const EmptyStateImage = ({ imageUrl, dataCy }) => {
	return (
		<div className="flex justify-center">
			<img data-cy={dataCy} src={imageUrl} />
		</div>
	);
};

export default EmptyStateImage;

EmptyStateImage.propTypes = {
	imageUrl: PropTypes.string,
	dataCy: PropTypes.string,
};
