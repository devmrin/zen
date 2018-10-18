import React, { Component } from 'react';

export default class EditorToolbar extends Component {
  render() {
    let { light, toggleLightMode } = this.props;
    return (
      <div
        className={
          light
            ? 'editor-toolbar__wrapper editor-toolbar__wrapper--light'
            : 'editor-toolbar__wrapper'
        }
      >
        <button onClick={toggleLightMode}>Light/Dark</button>
      </div>
    );
  }
}
