/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NutritionFactBadge from '../components/nutrition-fact-badge/nutrition-fact-badge';

export default {
  title: 'Components/NutritionFactBadge',
  component: NutritionFactBadge,
  argTypes: {
  },
};

function Template(args) {
  return (
    <div
      style={{
        fontFamily: 'system-ui',
      }}
    >
      <NutritionFactBadge {...args} />
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
};
