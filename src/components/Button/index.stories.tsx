import { Button } from './index';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Global/Button',
  component: Button,
  argsTypes: {
    title: {
      type: 'string',
      control: 'text',
      defaultValue: 'Send',
    },
    color: {
      control: 'color',
      defaultValue: '#0050bc',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    iconLeft: {
      control: 'none',
    },
    onClick: {
      action: 'onClick',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  iconLeft: <i className='fas fa-user' />,
  title: 'Invite',
};
