import React, { Component } from 'react';
import './EditorToolbar.scss';
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
        <button
          onClick={toggleLightMode}
          className={
            light
              ? 'editor-toolbar__button editor-toolbar__button--light'
              : 'editor-toolbar__button'
          }
        >
          {light ? 'L' : 'D'}
        </button>
      </div>
    );
  }
}
