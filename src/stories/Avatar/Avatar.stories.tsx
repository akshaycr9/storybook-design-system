import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] } },
    isFocused: { control: { type: 'boolean' } },
    type: { control: { type: 'select', options: ['user', 'group'] } },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: 'https://picsum.photos/200',
    type: 'user',
  },
};

export const Focused: Story = {
  args: {
    ...Primary.args,
    isFocused: true,
  },
};

export const Sizes = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Avatar size='xs' {...Primary.args} />
        <Avatar size='sm' {...Primary.args} />
        <Avatar size='md' {...Primary.args} />
        <Avatar size='lg' {...Primary.args} />
        <Avatar size='xl' {...Primary.args} />
        <Avatar size='xxl' {...Primary.args} />
      </div>
    );
  },
};
