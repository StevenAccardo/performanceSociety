import React, { Component } from 'react';
import ArticleMain from './articleMain';
import ArticleList from './articleList';

import articleData from './articleData';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleArray: articleData,
      selectedArticle: articleData[0]
    };
  }
  render() {
    return (
      <div>
        <ArticleMain selectedArticle={this.state.selectedArticle} />
        <ArticleList articleArray={this.state.articleArray} />
      </div>
    );
  }
}

export default Articles;
