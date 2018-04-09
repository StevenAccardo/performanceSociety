import React from 'react';

import ArticleListItem from './articleListItem';

const ArticleList = ({ articleArray, onArticleSelect }) => {
  const renderList = articles => {
    return articles.map((article, index) => {
      return <ArticleListItem onArticleSelect={onArticleSelect} key={index} article={article} />;
    });
  };
  return <div>{renderList(articleArray, onArticleSelect)}</div>;
};

export default ArticleList;
