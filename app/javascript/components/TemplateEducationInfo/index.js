import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local Components
import View from './View';

class TemplateEducationInfo extends Component {
  render() {
    return (
      <View
        template={this.props.template}
        education_infos={this.props.education_infos}
      />
    );
  }
}

TemplateEducationInfo.propTypes = {};

export default TemplateEducationInfo;