import React from 'react';

class Preloader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: false,
    };
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default Preloader;
