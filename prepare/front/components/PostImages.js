import React from 'react';
import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  console.log(images);
  return (
    <div>
      구현중!
    </div>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;
