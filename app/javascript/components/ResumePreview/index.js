import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Local Components
import View from './View';

class ResumePreview extends Component {
  _downloadPDF = (data) => {
    const blob = new Blob(data, { type: 'application/pdf' });
    const fileURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  _generatePDF = () => {
    const resume = document.getElementsByClassName('template-one')[0];

    axios
      .get('/api/v1/generate-pdf', {
        responseType: 'blob',
        params: {
          body: resume.outerHTML
        }
      })
      .then((res) => {
        this._downloadPDF([res.data]);
      });
  };

  render() {
    const { data, template } = this.props;
    return (
      <React.Fragment>
        <button onClick={this._generatePDF}>Generate PDF</button>
        <View data={data} template={template} />
      </React.Fragment>
    );
  }
}

ResumePreview.propTypes = {};

export default ResumePreview;