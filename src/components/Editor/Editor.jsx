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
    return (
      <Background>
        <EditorWrapper>
          <Textarea className="editor__header" defaultValue="This is title" />
          <br />
          <Textarea className="editor__body" defaultValue="This is body" />
        </EditorWrapper>
      </Background>
    );
  }
}

export default Editor;
