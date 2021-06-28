import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

export class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        blogPost: []
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
            blogPost: result
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
    const { classes } = this.props,
      { blogPost } = this.state;

    console.log(blogPost)
    return (
      <div className={classes.blogPageWrapper}>
        <h1>Blog page</h1>
        <ReactMarkdown>{blogPost}</ReactMarkdown>
      </div>
    );
  }
}

BlogPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const styles = () => ({
    blogPageWrapper: {
      minHeight: '100vh',
      width: '100%',
      margin: '20px'
    },
});
  

export default withStyles(styles)(BlogPage);
