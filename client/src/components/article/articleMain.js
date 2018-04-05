import React from 'react';

const ArticleMain = ({ selectedArticle: { author, date, img, paragraphs, title } }) => {
  const authorImg = author.imgLocation;

  const authorInfo = author => {
    if (author.igLink || author.website) {
      let authorLink = author.igLink ? author.igLink : author.website;

      return (
        <a target="_blank" href={authorLink}>
          {author.name}
        </a>
      );
    }
    return <p>{author.name}</p>;
  };

  const renderContent = paragraphs => {
    return paragraphs.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{author.name}</p>
      <img src={authorImg} />
      {authorInfo(author)}
      {renderContent(paragraphs)}
    </div>
  );
};

export default ArticleMain;
