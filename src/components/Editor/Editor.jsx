import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { EditorToolbar } from '../index';
import styled from 'styled-components';
import './Editor.scss';

const EditorWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 5vh;
`;

class Editor extends Component {
  state = {
    light: false
  };

  componentDidMount() {
    this.header.focus();
  }

  toggleLightMode = () => {
    this.setState({
      light: !this.state.light
    });
  };

  handleHeader = event => {
    if (event.key == 'Enter') {
      event.preventDefault();
      this.body.focus();
    }
  };

  render() {
    let { light } = this.state;
    return (
      <div
        className={
          light
            ? 'editor__background editor__background--light'
            : 'editor__background'
        }
      >
        <EditorToolbar light={light} toggleLightMode={this.toggleLightMode} />
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
