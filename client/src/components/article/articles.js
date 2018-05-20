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
      <div className="mt-5 container-fluid articlePage">
        <div className="row">
          <div className="col-md-8">
            <ArticleMain selectedArticle={this.state.selectedArticle} />
          </div>
          <div className="col-md-4">
            <ArticleList
              onArticleSelect={selectedArticle => {
                this.setState({ selectedArticle });
              }}
              articleArray={this.state.articleArray}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
