import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        blogPosts: [],
        isLoading: true,
        error: null
    };

  }

  componentDidMount() {
    fetch("https://peaceful-albattani-780338.netlify.app/.netlify/functions/api/getAllPosts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            blogPosts: result,
            isLoading: false
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }



  render() {
    const { blogPosts, isLoading, error } = this.state;

    if (error) {
      return <p>{error}</p>
    }

    return (
      <div className="homePageWrapper">
        <div className="headerContainer">
          <h1>Home page</h1>
        </div>
        {isLoading ?
        <p>Loading...</p>
        :
        <div className="blogPostsContainer">
          {blogPosts.map((blogPost, index) =>
            <div key={index} className="linkContainer">
              <Link className="content-header-link" to={`/blog/${blogPost.fileNameURL}`}>
                {blogPost.fileName}
              </Link>
            </div>
          )}
        </div>
        }

      </div>
    );
  }
}
  

export default HomePage;
