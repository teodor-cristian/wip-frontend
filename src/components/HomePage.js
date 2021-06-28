import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        blogPosts: []
    };

  }

  componentDidMount() {
    fetch("https://peaceful-albattani-780338.netlify.app/.netlify/functions/api/getAllPosts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            blogPosts: result
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
    const { classes } = this.props;
    const { blogPosts } = this.state;

    console.log( blogPosts )

    return (
      <div className={classes.homePageWrapper}>
        <h1>Home page</h1>
        <Paper className={classes.blogPostsContainer}>
          {blogPosts.map((blogPost, index) =>
            <Link key={index} className="content-header-link" to={`/blog/${blogPost.fileNameURL}`}>
              {blogPost.fileName}
            </Link>
          )}

        </Paper>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
    homePageWrapper: {
      minHeight: '100vh',
      width: '100%',
    },
    blogPostsContainer: {
      width: '500px',
      margin: 'auto',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
    }
});
  

export default withStyles(styles)(HomePage);
