import React, { Component } from 'react';
import './EditorToolbar.scss';
import { FSLight, FSDark } from '../../assets';
export default class EditorToolbar extends Component {
  render() {
    let { light, toggleFullScreen, toggleLightMode } = this.props;
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
        <button
          onClick={toggleFullScreen}
          className={
            light
              ? 'editor-toolbar__button editor-toolbar__button--light'
              : 'editor-toolbar__button'
          }
        >
          <img
            className="editor-toolbar__icon"
            src={light ? FSLight : FSDark}
            alt="fulllscreen"
          />
        </button>
      </div>
    );
  }
}
