import type { Meta, StoryObj } from '@storybook/react';
import { BlitzDialogContent } from './blitz-dialog';

const meta: Meta<typeof BlitzDialogContent> = {
  component: BlitzDialogContent,
  title: 'BlitzDialogContent',
};
export default meta;
type Story = StoryObj<typeof BlitzDialogContent>;

export const Primary: Story = {
  args: {},
};
