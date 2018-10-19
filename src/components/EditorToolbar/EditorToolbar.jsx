import React, { Component } from 'react';
import './EditorToolbar.scss';
import { DWDark, DWLight, FSDark, FSLight } from '../../assets';
import ReactTooltip from 'react-tooltip';
export default class EditorToolbar extends Component {
  render() {
    let { light, toggleFullScreen, toggleLightMode, saveFile } = this.props;
    return (
      <div
        className={
          light
            ? 'editor-toolbar__wrapper editor-toolbar__wrapper--light'
            : 'editor-toolbar__wrapper'
        }
      >
        <a data-tip="Theme">
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
        </a>
        <a data-tip="Fullscreen">
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
        </a>
        <a data-tip="Download">
          <button
            onClick={saveFile}
            className={
              light
                ? 'editor-toolbar__button editor-toolbar__button--light'
                : 'editor-toolbar__button'
            }
          >
            <img
              className="editor-toolbar__icon"
              src={light ? DWLight : DWDark}
              alt="download"
            />
          </button>
        </a>
        <ReactTooltip
          className="editor-toolbar__tooltip"
          place="right"
          type={light ? 'dark' : 'light'}
          effect="solid"
          offset={{ top: 4 }}
        />
      </div>
    );
  }
}
