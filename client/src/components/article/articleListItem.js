import React from 'react';

const ArticleListItem = ({ article, onArticleSelect }) => {
  return (
    <li onClick={() => onArticleSelect(article)} className="articleListItem list-group-item mb-2">
      <div className="articleListItem__box media">
        <div className="articleListItem__imageBox media-left mr-3 rounded">
          <img className="articleListItem__imageBox__image media-object img-fluid" src={article.img} />
        </div>

        <div className="articleListItem__box__body media-body">
          <div className="articleListItem__box__title media-heading font-weight-bold text-uppercase">{article.title}</div>
          <p className="articleListItem__box__description">{article.description}</p>

          <p className="articleListItem__box__author m-0">Author: {article.author.name}</p>
          <p className="articleListItem__box__date m-0">Date: {article.date}</p>
        </div>
      </div>
    </li>
  );
};

export default ArticleListItem;
