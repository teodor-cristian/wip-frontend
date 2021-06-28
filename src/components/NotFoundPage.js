import React from 'react';

export class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>Page not found</h1>
      </div>
    );
  }
}


export default NotFoundPage;
