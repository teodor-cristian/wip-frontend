import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BlogPage from './BlogPage/BlogPage';
import NotFoundPage from './NotFoundPage'

class Root extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blog/:fileNameURL" component={BlogPage} key=":fileNameURL" />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
  
  export default Root;