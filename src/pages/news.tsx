import React, { Component } from 'react'
import Layout from '../components/template/Layout'

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

export default class  news extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState: any) => {
      this.setState({
        editorState,
      });
    }
  render() {
    const { editorState } = this.state;
    
    return (
      <Layout titulo="Noticias" 
        subtitulo="Aqui você irá gerenciar as suas Noticias!">
          <h1>gerar noticias</h1>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
      </Layout>
    )
  }

}
