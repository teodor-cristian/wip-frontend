import React from 'react';
import './BlogPage.css';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

export class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        blogPost: [],
        isLoading: true,
        error: null
    };

  }

  componentDidMount() {
    const { match: {
        params: { fileNameURL }
      }} = this.props;

    fetch(`https://peaceful-albattani-780338.netlify.app/.netlify/functions/api/getPosts/${fileNameURL}`)
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            blogPost: result,
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
    const { blogPost, isLoading, error } = this.state;

    if (error) {
      return <p>{error}</p>
    }

    return (
      <div className="blogPageWrapper">
        <h1>Blog page</h1>
        {isLoading ?
        <p>Loading...</p>
        :
        <ReactMarkdown>{blogPost}</ReactMarkdown>
        }
      </div>
    );
  }
}

BlogPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default BlogPage;
