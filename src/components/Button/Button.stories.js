import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import ButtonDocs from './Button.mdx';
import { Button } from './index.js';

const typeOptions = {
  'primary': 'primary',
  'success': 'success',
  'info': 'info',
  'default': 'default',
  'warning': 'warning',
  'danger': 'danger',
  'solid-primary': 'solid-primary',
  'solid-primary-raised': 'solid-primary-raised',
  'solid-secondary': 'solid-secondary',
  'outline-primary': 'outline-primary',
  'outline-secondary': 'outline-secondary',
  'outline-secondary-raised': 'outline-secondary-raised',
  'rounded-solid': 'rounded-solid',
  'rounded-outline': 'rounded-outline',
  'icon': 'icon',
  'text': 'text',
  'text-link': 'text-link',
  'inline-outline-secondary': 'inline-outline-secondary',
  'solid-primary-pill': 'solid-primary-pill',
  'solid-secondary-pill': 'solid-secondary-pill',
  'solid-outline-raised-pill': 'solid-outline-raised-pill',
 };


export default {
  title: 'Button',
  parameters: {
    component: Button,
    decorators: [withInfo, withKnobs],
    // controls: { hideNoControlsWarning: true },
  }
};

export const simpleButton = () => (
    <Button
      onClick={() => action('Button clicked')('Click')}
      type={select('typeOption', typeOptions, typeOptions.primary)}
      small={boolean('small', false)}
      large={boolean('large', false)}
    >
      {text('children', 'TEXT')}
    </Button>
);

simpleButton.story = {
  parameters: {
    'in-dsm': { id: '5f34851d4a308272466b4436', versionFilePath: '../versionFile.json' },
    docs: { page: ButtonDocs }
  }
};





// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withActions, action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
// import { Button, SubmitButton } from './index.js';
// import { Button as TheirButton } from '@storybook/react/demo';


// const typeOptions = {
//   'primary': 'primary',
//   'success': 'success',
//   'info': 'info',
//   'default': 'default',
//   'warning': 'warning',
//   'danger': 'danger',
//   'solid-primary': 'solid-primary',
//   'solid-primary-raised': 'solid-primary-raised',
//   'solid-secondary': 'solid-secondary',
//   'outline-primary': 'outline-primary',
//   'outline-secondary': 'outline-secondary',
//   'outline-secondary-raised': 'outline-secondary-raised',
//   'rounded-solid': 'rounded-solid',
//   'rounded-outline': 'rounded-outline',
//   'icon': 'icon',
//   'text': 'text',
//   'text-link': 'text-link',
//   'inline-outline-secondary': 'inline-outline-secondary',
//   'solid-primary-pill': 'solid-primary-pill',
//   'solid-secondary-pill': 'solid-secondary-pill',
//   'solid-outline-raised-pill': 'solid-outline-raised-pill',
//  };

// storiesOf('Button', module)
//   .addDecorator(withInfo)
//   .addDecorator(withKnobs)
//   .addParameters({
//     info: {
//       inline: true
//     }
//   })
//   .add('Simple Button', () => (
//     <Button
//       onClick={action('clicked')}
//       type={select('typeOption', typeOptions, typeOptions.primary)}
//     >
//       {text('children', 'TEXT')}
//     </Button>
//   ),{
//     'in-dsm': {
//         id: '5f34851d4a308272466b4436'
//     }
//   })
//   .add('Small Button', () => (
//     <Button
//       small
//       onClick={action('clicked')}
//       type={select('typeOption', typeOptions, typeOptions.primary)}
//     >
//       {text('children', 'TEXT')}
//     </Button>
//   ),{
//     'in-dsm': {
//         id: '5f3485267543851a11f1473a'
//     }
//   })
//   .add('Submit Button', () => (
//     <SubmitButton onClick={action('clicked')}>Great</SubmitButton>
//   ),{
//     'in-dsm': {
//         id: '5f34872fe4c20f8567a36d7b'
//     }
//   });

  

// export default {
//   title: 'Button',
//   parameters: {
//     component: Button,
//     decorators: [withKnobs],
//     'in-dsm': {
//       id: '5f347e21752a5564c921767f',
//       versionFilePath: '../versionFile.json'
//     }
//   }
// };

// export const Small = () => <Button type="solid-primary-pill" small>small button</Button>
// export const Large = () => <Button type="primary" large>small button</Button>

// export const simpleButton = () => (
  // <Button
  //   onClick={() => action('Button clicked')('Click')}
  //   // small={boolean('small', true)}
  //   type={select('typeOption', typeOptions, typeOptions.primary)}
  // >
  //   {text('children', 'TEXT')}
  // </Button>
// );

// simpleButton.story = {
//   parameters: {
//     // "in-dsm": {id: "5f31ad48a3f8f4d3db9b9756", versionFilePath: '../versionFile.json'}
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
//     // docs: { page: buttonDocs }
//   }
// };