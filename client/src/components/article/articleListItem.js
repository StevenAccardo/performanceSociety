import React from 'react';

const ArticleListItem = ({ article, onArticleSelect }) => {
  return (
    <li onClick={() => onArticleSelect(article)} className="article-list-item list-group-item mb-2">
      <div className="video-list media">
        <div className="media-left mr-3 rounded">
          <img className="media-object img-fluid" src={article.img} />
        </div>

        <div className="media-body">
          <div className="media-heading font-weight-bold text-uppercase">{article.title}</div>
          <p>{article.description}</p>

          <p className="m-0">Author: {article.author.name}</p>
          <p className="m-0">Date: {article.date}</p>
        </div>
      </div>
    </li>
  );
};

export default ArticleListItem;
