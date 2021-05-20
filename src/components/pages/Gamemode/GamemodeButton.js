import React, { Component } from 'react';

export default class GamemodeButton extends Component {
  render() {
    return (
      <>
        <div>
          <button>Read</button>
        </div>
        <div>
          <button>Write</button>
        </div>
        <div>
          <button>Draw</button>
        </div>
      </>
    );
  }
}
