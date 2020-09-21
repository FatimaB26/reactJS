import React from 'react';

class Title extends React.Component {

  render() {
    console.log (this.props)
    return (
      <div>
        <h1>Hello World Social Builder!</h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Title;



