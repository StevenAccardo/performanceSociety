import React from 'react';

const ArticleMain = ({ selectedArticle: { author, date, img, paragraphs, title } }) => {
  const authorImg = author.imgLocation;

  const authorInfo = author => {
    const socialLink = linkSelection(author);
    if (socialLink) {
      return (
        <p className="articleContent__authorName">
          Written By:&nbsp;
          <a className="articleContent__authorName__Link" target="_blank" href={socialLink}>
            {author.name}
          </a>
        </p>
      );
    }
    return <p>{author.name}</p>;
  };

  const linkSelection = author => {
    if (author.igLink || author.website) {
      let authorLink = author.igLink ? author.igLink : author.website;

      return authorLink;
    }
    return null;
  };

  const renderContent = paragraphs => {
    return paragraphs.map((paragraph, index) => {
      return (
        <p className="articleContent__paragraph" key={index}>
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="articleContent p-3 mb-3">
      <h1 className="articleContent__title text-uppercase font-weight-bold">{title}</h1>
      <a clasName="articleContent__authorLink" target="_blank" href={linkSelection(author)}>
        <img className="articleContent__authorLink__authorImg rounded mb-5 img-fluid" src={authorImg} />
      </a>
      {authorInfo(author)}
      {renderContent(paragraphs)}
    </div>
  );
};

export default ArticleMain;
