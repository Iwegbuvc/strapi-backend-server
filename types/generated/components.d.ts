import type { Schema, Struct } from '@strapi/strapi';

export interface CaseStudiesCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_case_studies_case_study_sections';
  info: {
    displayName: 'CaseStudySection';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'case-studies.case-study-section': CaseStudiesCaseStudySection;
    }
  }
}
