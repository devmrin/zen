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
    if (JSON.parse(localStorage.getItem('light'))) {
      this.setState({ light: JSON.parse(localStorage.getItem('light')) });
    } else {
      this.setState({ light: JSON.parse(localStorage.getItem('light')) });
    }
    if (localStorage.getItem('headerText')) {
      this.setState({ headerText: localStorage.getItem('headerText') });
    }
    if (localStorage.getItem('bodyText')) {
      this.setState({ bodyText: localStorage.getItem('bodyText') });
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
    this.setState(prevState => {
      localStorage.setItem('light', JSON.stringify(!prevState.light));
      return { light: !prevState.light };
    });
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

  handleHeaderReturn = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.body.focus();
    }
  };

  handleHeader = e => {
    this.setState({ headerText: e.target.value }, () => {
      localStorage.setItem('headerText', this.state.headerText);
    });
  };

  handleBody = e => {
    this.setState({ bodyText: e.target.value }, () => {
      localStorage.setItem('bodyText', this.state.bodyText);
    });
  };

  render() {
    let { light, headerText, bodyText } = this.state;
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
            onKeyPress={this.handleHeaderReturn}
            value={headerText}
            onChange={this.handleHeader}
          />
          <br />
          <Textarea
            className={
              light ? 'editor__body editor__body--light' : 'editor__body'
            }
            placeholder="Write something..."
            inputRef={ref => (this.body = ref)}
            value={bodyText}
            onChange={this.handleBody}
          />
        </EditorWrapper>
      </div>
    );
  }
}

export default Editor;
