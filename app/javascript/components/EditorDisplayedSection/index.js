import React from 'react';

const EditorDisplayedSection = (props) => {
  return (
    <div className="editor-displayed-section">
      {props.editorSections.filter((component) => {
        return component.props.name === props.selectedEditor;
      })}
    </div>
  );
};

export default EditorDisplayedSection;
