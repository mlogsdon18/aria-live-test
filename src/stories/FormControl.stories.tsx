import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl } from './FormControl';

export default {
  title: 'Example/FormControl',
  component: FormControl,
  argTypes: {
    message: { control: 'text' },
  },
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => <FormControl {...args} />;

export const Default = Template.bind({});
