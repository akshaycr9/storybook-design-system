import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] } },
    isFocused: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  src: 'https://picsum.photos/200',
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    size: 'md',
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
        <Avatar size='xs' {...defaultArgs} />
        <Avatar size='sm' {...defaultArgs} />
        <Avatar size='md' {...defaultArgs} />
        <Avatar size='lg' {...defaultArgs} />
        <Avatar size='xl' {...defaultArgs} />
        <Avatar size='xxl' {...defaultArgs} />
      </div>
    );
  },
};
