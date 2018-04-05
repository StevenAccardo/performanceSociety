import React from 'react';

import { Media } from 'reactstrap';

const ArticleListItem = ({ article: { title, date, img, author, description } }) => {
  const image = img;
  return (
    <Media>
      <Media left>
        <Media object src={image} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>{title}</Media>
        {description}
      </Media>
    </Media>
  );
};

export default ArticleListItem;
