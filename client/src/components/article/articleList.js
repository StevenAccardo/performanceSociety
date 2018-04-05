import React from 'react';

import ArticleListItem from './articleListItem';

const ArticleList = ({ articleArray }) => {
  const renderList = articles => {
    return articles.map((article, index) => {
      return <ArticleListItem key={index} article={article} />;
    });
  };
  return <div>{renderList(articleArray)}</div>;
};

export default ArticleList;
