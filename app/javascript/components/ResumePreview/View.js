import React from 'react';

// Local Components
import TemplateBasicInfo from '../TemplateBasicInfo';
import TemplateEducationInfo from '../TemplateEducationInfo';
import TemplateSkillInfo from '../TemplateSkillInfo';
import TemplateJobInfo from '../TemplateJobInfo';

const View = ({ data, template }) => {
  return (
    <div className="resume-preview">
      <div className="template-one">
        {/* <TemplateBasicInfo template={template} basic_info={data.basic_info} /> */}
        <TemplateBasicInfo template={template} />
        <TemplateSkillInfo template={template} />
        {/* <TemplateSkillInfo template={template} skill_infos={data.skill_infos} />
        <TemplateEducationInfo
          template={template}
          education_infos={data.education_infos}
        />
        <TemplateJobInfo template={template} job_infos={data.job_infos} /> */}
      </div>
    </div>
  );
};

export default View;
