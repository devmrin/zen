import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import styled from 'styled-components';
import './Editor.scss';

const Background = styled.div`
  height: 100vh;
  background: #1e1e1e;
`;

const EditorWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 5vh;
`;

class Editor extends Component {
  render() {
    let { light } = this.props;
    return (
      <Background>
        <EditorWrapper>
          <Textarea
            className={
              light ? 'editor__header editor__header--light' : 'editor__header'
            }
            placeholder="Title..."
          />
          <br />
          <Textarea
            className={
              light ? 'editor__body editor__body--light' : 'editor__body'
            }
            placeholder="Write something..."
          />
        </EditorWrapper>
      </Background>
    );
  }
}

export default Editor;
