import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { EditorToolbar } from '../index';
import { returnTitle } from '../../utils/text';
import styled from 'styled-components';
import './Editor.scss';

const EditorWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 5vh;
`;

class Editor extends Component {
  state = {
    light: false,
    headerText: '',
    bodyText: ''
  };

  componentWillMount() {
    if (localStorage.getItem('light')) {
      this.setState({ light: localStorage.getItem('light') });
    }
  }

  componentDidMount() {
    this.header.focus();
  }

  toggleFullScreen = () => {
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else {
      this.editor.webkitRequestFullScreen();
    }
  };

  toggleLightMode = () => {
    this.setState(
      {
        light: !this.state.light
      },
      () => {
        localStorage.setItem('light', this.state.light);
      }
    );
  };

  saveFile = () => {
    if (this.header.value.length || this.body.value.length) {
      var element = document.createElement('a');
      var file = new Blob(
        [
          this.header.value,
          '\r\n--------------------\r\n \r\n',
          this.body.value
        ],
        {
          type: 'text/plain'
        }
      );
      element.href = URL.createObjectURL(file);
      element.download = returnTitle(this.header.value);
      element.click();
    } else {
      console.log('No content to download.');
    }
  };

  handleHeader = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.body.focus();
    }
  };

  render() {
    let { light } = this.state;
    return (
      <div
        ref={ref => (this.editor = ref)}
        className={
          light
            ? 'editor__background editor__background--light'
            : 'editor__background'
        }
      >
        <EditorToolbar
          light={light}
          toggleLightMode={this.toggleLightMode}
          toggleFullScreen={this.toggleFullScreen}
          saveFile={this.saveFile}
        />
        <EditorWrapper>
          <Textarea
            className={
              light ? 'editor__header editor__header--light' : 'editor__header'
            }
            placeholder="Title"
            inputRef={ref => (this.header = ref)}
            onKeyPress={this.handleHeader}
          />
          <br />
          <Textarea
            className={
              light ? 'editor__body editor__body--light' : 'editor__body'
            }
            placeholder="Write something..."
            inputRef={ref => (this.body = ref)}
          />
        </EditorWrapper>
      </div>
    );
  }
}

export default Editor;
