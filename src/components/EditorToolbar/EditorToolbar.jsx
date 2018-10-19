import React, { Component } from 'react';
import './EditorToolbar.scss';
import { DWDark, DWLight, FSDark, FSLight } from '../../assets';
import { returnCount } from '../../utils/text';
import ReactTooltip from 'react-tooltip';
export default class EditorToolbar extends Component {
  render() {
    let {
      light,
      toggleFullScreen,
      toggleLightMode,
      saveFile,
      bodyText
    } = this.props;
    return (
      <div
        className={
          light
            ? 'editor-toolbar__wrapper editor-toolbar__wrapper--light'
            : 'editor-toolbar__wrapper'
        }
      >
        <a href={null} data-tip="Words">
          <button
            className={
              light
                ? 'editor-toolbar__button editor-toolbar__button--light'
                : 'editor-toolbar__button'
            }
          >
            <span
              className={
                returnCount(bodyText) < 100
                  ? 'editor-toolbar__word-count'
                  : returnCount(bodyText) < 1000
                    ? 'editor-toolbar__word-count--md'
                    : 'editor-toolbar__word-count--sm'
              }
            >
              {returnCount(bodyText)}
            </span>
          </button>
        </a>
        <a href={null} data-tip="Theme">
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
        <a href={null} data-tip="Fullscreen">
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
        <a href={null} data-tip="Download">
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
          delayShow={100}
          type={light ? 'dark' : 'light'}
          effect="solid"
          offset={{ top: 4 }}
        />
      </div>
    );
  }
}
